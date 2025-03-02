from django.urls import path
from user import views

from .views import *

urlpatterns = [
    path('register/', views.Register.as_view(), name='register'),
    path('login/', views.Login.as_view(), name='login'),
    path('logout/', views.Logout.as_view(), name='logout'),
    path('verify/', views.VerifyOTP.as_view(), name='verify'),
    path('forget-password/', views.ForgotPass.as_view(), name='forgot-password'),
    path('profile/', views.UserProfile.as_view(), name='profile'),

]