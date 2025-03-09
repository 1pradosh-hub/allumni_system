from django.shortcuts import render
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView
from .models import User
from .email import *
from django.contrib.auth import authenticate
from django.contrib.auth import logout
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from .helpers import send_forget_password_mail
import uuid
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

class Register(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    def post(self, request):
        serializer = serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully. OTP sent to your email."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = UserLogin

    def post(self, request, *args, **kwargs):
        # print(request.data)  # Debugging
        email = request.data.get('email')
        password = request.data.get('password')
        # Authenticate thr registered user
        user = authenticate( email=email, password=password)
        
        if user is not None:
            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            # return the user data
            return Response({
                'refresh': str(refresh),
                'access': access_token,
                'user': UserSerializer(user).data,
            })
        else:
            raise ValidationError('A user with this email and password is not found.')

        # Check the user is verified or not 
        if not user.is_verified:
            raise serializers.ValidationError({
                'status': 400,
                'message': 'Your account is not verified. Please check your email for the verification link.'
            })



class Logout(APIView):
    serializer_class = UserLogout
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can log out

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({"message": "Successfully logged out."}, status=status.HTTP_200_OK)



class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyAccount(data = data)

            if serializer.is_valid():
                email = serializer.data['email']
                otp = serializer.data['otp']

                user = User.objects.filter(email=email)
                if not user.exists():
                    return Response({
                        'status': 400,
                        'message': "Something went wrong",
                        "data": "Invalid email"
                    })
                if user[0].otp !=otp:
                    return Response({
                        'status': 400,
                        'message': "Something went wrong",
                        "data": "Wrong otp"
                    })

                user = user.first()
                user.is_verified = True
                user.save()

                return Response({
                        'status': 200,
                        'message': "Account verified",
                        "data": {},
                    })

            return Response({
                        'status': 400,
                        'message': "Something went wrong",
                        "data": serializer.errors,
                    })

        except Exception as e :
            print(e)



class ForgotPass(APIView):
    def post(self, request):
        email = request.data.get('email')  # Get email from request body
        # Check if user exists
        user = User.objects.filter(email=email).first()
        if not user:
            return Response({'error': 'No email found'}, status=400)
        # Generate a token
        token = str(uuid.uuid4())
        # Send password reset email
        send_forget_password_mail(user, token)
        return Response({'message': 'An email has been sent to your email address'}, status=200)


class UserProfile(APIView):
    permission_classes = [IsAuthenticated]  # Ensures only authenticated users can access
    # serializer_class = ProfileSerializer

    def get(self, request):
        user = request.user  # Get logged-in user from token
        # profile = Profile.objects.get(user=user)
        user_serializer = UserSerializer(user)
        return Response({
            'user': user_serializer.data
        })

    # def post(self, request):
    #     profile = Profile.objects.get(user=request.user)
    #     serializer = ProfileSerializer(profile, data=request.data, partial=True)  
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=400)