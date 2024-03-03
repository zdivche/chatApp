from django.urls import path
from .views import ListItems
urlpatterns = [
  path('items/', ListItems.as_view(), name='list_items'),
]