from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from rest_framework.views import APIView
from .models import User
from .email import *
from django.contrib.auth import authenticate
from django.contrib.auth import logout
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .helpers import send_forget_password_mail
import uuid

class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully. OTP sent to your email."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(APIView):
    def post(self, request, *args, **kwargs):
        serializer = UserLogin(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @login_required
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
    pass