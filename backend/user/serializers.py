from rest_framework import serializers
from .models import *
from datetime import date
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework.exceptions import ValidationError
import re
from rest_framework.response import Response
from django.core.mail import send_mail
import random
from django.conf import settings

# User registration serializer
class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField( required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = '__all__'

        # Ensure email is unique and has a valid format.
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        email_regex = r"^[^@]+@[^@]+\.[^@]+$"  # Basic email format check
        if not re.match(email_regex, value):
            raise serializers.ValidationError("Invalid email format.")
        return value

        # Ensure the full name is valid and contains only letters and spaces.
    def validate_full_name(self, value):
        if not all(x.isalpha() or x.isspace() for x in value):
            raise serializers.ValidationError("Full name must contain only letters and spaces.")
        return value

        # Ensure password meets complexity requirements.
    def date_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("Password must be at least 8 characters long.")
        if not any(char.isdigit() for char in value):
            raise serializers.ValidationError("Password must contain at least one number.")
        if not any(char.isupper() for char in value):
            raise serializers.ValidationError("Password must contain at least one uppercase letter.")
        if not any(char.islower() for char in value):
            raise serializers.ValidationError("Password must contain at least one lowercase letter.")
        if not any(char in "!@#$%^&*()_+-=" for char in value):
            raise serializers.ValidationError("Password must contain at least one special character.")
        return value

        # Ensure the user is at least 18 years old.
    def validate_birth_date(self, value):
        age = (date.today() - value).days // 365
        if age < 18:
            raise serializers.ValidationError("User must be at least 18 years old.")
        return value

        #  Ensure specific relationships between fields are valid.
    def validate(self, data):
        if data['gender'].capitalize() not in ['Male', 'Female']:
            raise serializers.ValidationError({"gender": "Gender must be either 'Male' or 'Female'."})
        return data

    # Hash the password before saving.
    def create(self, validated_data):
        # Hash the password
        validated_data['password'] = make_password(validated_data['password'])

        # Create user
        user = super().create(validated_data)

        # Generate OTP
        otp = random.randint(1000, 9999)
        user.otp = otp
        user.save()

        # Send OTP email
        subject = "Your Account Verification Code"
        message = f"Hi {user.username},\n\nYour OTP for verification is {otp}."
        email_from = settings.EMAIL_HOST_USER
        try:
            send_mail(subject, message, email_from, [user.email])
        except Exception as e:
            print(f"Error sending OTP email: {e}")

        return user

# User account verification serializer
class VerifyAccount(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    otp = serializers.CharField(max_length=4)


# UserLogin serializer
class UserLogin(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request=self.context.get('request'), email=data.get('email'), password=data.get('password'))
        if not user:
            raise ValidationError('A user with this email and password is not found.')
        
        if not user.is_verified:
            raise serializers.ValidationError({
                'status': 400,
                'message': 'Your account is not verified. Please check your email for the verification link.'
            })

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        # Update the last login time
        update_last_login(None, user)

        return {
            'email': user.email,
            'refresh': str(refresh),
            'access': access_token,
        }

# User profile serializer
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'bio']

# User logout serializer
class UserLogout(serializers.Serializer):
    refresh = serializers.CharField()
    def validate(self, attrs):
        # Validate and store the refresh token.
        self.token = data.get('refresh')
        if not self.token:
            raise serializers.ValidationError({"refresh": "This field is required."})
        return data
    def save(self, **kwargs):
        # Blacklist the token 
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            raise serializers.ValidationError({"refresh": "Invalid or expired token."})