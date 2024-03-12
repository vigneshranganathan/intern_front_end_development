from rest_framework import serializers
from .models import ElectricalMachineParameter

class ParameterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectricalMachineParameter
        fields = '__all__'  # Include all fields