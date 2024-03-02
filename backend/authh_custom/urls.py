from django.urls import path
from .views import CreateUserView, PasswordResetRequestView, PasswordResetView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)



urlpatterns = [
    path('register/', CreateUserView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('request-reset-password/', PasswordResetRequestView.as_view(), name='request-reset-password'),
    path('reset-password/', PasswordResetView.as_view(), name='reset-password'),
]
