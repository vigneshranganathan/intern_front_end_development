from django.db import models

# Create your models here.
from django.db import models

class ElectricalMachineParameter(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)  # Optional 
    value = models.CharField(max_length=50)  # Could be FloatField if needed
    unit = models.CharField(max_length=20)
    description = models.TextField(blank=True)