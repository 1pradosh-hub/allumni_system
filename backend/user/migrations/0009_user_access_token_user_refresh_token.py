# Generated by Django 5.1.3 on 2025-01-25 14:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0008_user_otp_user_otp_expires_at"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="access_token",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="user",
            name="refresh_token",
            field=models.TextField(blank=True, null=True),
        ),
    ]
