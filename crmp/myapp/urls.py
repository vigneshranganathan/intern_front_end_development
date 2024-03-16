from django.urls import path
from .views import ClutchListCreate 

urlpatterns = [
    path('clutch/', ClutchListCreate.as_view(), name='clutch_list_create'),
]