# Create your models here.
from django.db import models

class Clutch(models.Model):
    item_service_no = models.IntegerField(primary_key=True)
    part_no = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return f"{self.item_service_no} - {self.part_no} - {self.description}"
    
    class Meta:
        db_table = 'clutch'