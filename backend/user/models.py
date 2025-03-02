from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Hash the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser):
    username = models.CharField(max_length=100, blank=True, null=True)  # Full Name
    email = models.EmailField(unique=True)  # Email Address
    birth_date = models.DateField()  # Birth Date
    gender_choices = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    gender = models.CharField(
        max_length=10,
        choices=gender_choices,
        default='Other'
    )
    is_staff = models.BooleanField(default=False)  # For Admin/Superuser Permissions
    is_active = models.BooleanField(default=True)  # For Activation Status
    date_joined = models.DateTimeField(auto_now_add=True)  # For User Registration Time
    is_verified = models.BooleanField(default=False)  # For Checking User Verification

    # OTP Fields
    otp = models.CharField(max_length=4, blank=True, null=True)  # Store OTP
    otp_expires_at = models.DateTimeField(blank=True, null=True)  # OTP Expiration Time 

    access_token = models.TextField(blank=True, null=True)
    refresh_token = models.TextField(blank=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'  # Authentication field
    REQUIRED_FIELDS = ['username', 'birth_date']  # Additional required fields

    def __str__(self):
        return self.email

# User profile model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True)
    # avatar = models.ImageField(upload_to='avatars/', default='default.jpg')

    def __str__(self):
        return f"{self.user.username}'s Profile"
