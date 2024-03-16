# Create your views here.
from rest_framework import generics
from .models import Clutch
from .serializers import ClutchSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from django.shortcuts import render


class ClutchListCreate(generics.ListCreateAPIView):
    queryset = Clutch.objects.all()
    serializer_class = ClutchSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data
        return Response(data)   