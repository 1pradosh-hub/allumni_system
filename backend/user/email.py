from django.core.mail import send_mail
from .models import User
import random
from django.conf import settings


def send_verification_email(email):
    otp = random.randint(1000, 9999)
    subject = "Your account verification code"
    message = f'Your OTP is {otp}.'
    email_from = settings.EMAIL_HOST_USER  # Ensure this is correct
    print(f"EMAIL_FROM: {email_from}")
    try:
        # Sending the email
        send_mail(subject, message, email_from, [email])
        print(f"Email sent to {email} with OTP {otp}")
    except Exception as e:
        print(f"Error sending email: {e}")
        return None

    # Save OTP in the database
    try:
        user_obj = User.objects.get(email=email)
        user_obj.otp = otp
        user_obj.save()
        print(f"OTP {otp} saved for {email}")
    except User.DoesNotExist:
        print(f"No user found for email: {email}")


# {

#     "username": "pradosh",
#     "email": "pradoshmihirdash@gmail.com",
#     "password": "password",
#     "birth_date": "2002-10-10",
#     "gender": "Male"
# }