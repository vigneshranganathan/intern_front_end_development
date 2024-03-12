from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import ElectricalMachineParameter
from .serializers import ParameterSerializer

class ParameterViewSet(viewsets.ModelViewSet):
    queryset = ElectricalMachineParameter.objects.all()
    serializer_class = ParameterSerializer