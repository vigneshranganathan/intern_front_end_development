from rest_framework import serializers
from .models import Clutch

class ClutchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clutch
        fields = '__all__'