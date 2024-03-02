from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from django.core.mail import send_mail
from django.contrib.auth.models import User
from .models import PasswordResetToken
from django.contrib.auth.hashers import make_password

class CreateUserView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    



class PasswordResetRequestView(APIView):
    def post(self, request):
        email = request.data.get('email')
        user = User.objects.filter(email=email).first()
        if user:
            token = PasswordResetToken.objects.create(user=user)
            send_mail(
                'Password Reset',
                f'Your reset token is {token.token}',
                'z.divchenko@gmail.com',
                [email],
                fail_silently=False,
            )
        return Response({"message": "If an account with this email was found, a reset email has been sent."}, status=status.HTTP_200_OK)

class PasswordResetView(APIView):
    def post(self, request):
        token = request.data.get('token')
        new_password = request.data.get('password')
        reset_token = PasswordResetToken.objects.filter(token=token).first()
        if reset_token and reset_token.is_valid():
            user = reset_token.user
            user.password = make_password(new_password)
            user.save()
            reset_token.delete()  # Удалить токен после использования
            return Response({"message": "Password has been reset successfully."}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)