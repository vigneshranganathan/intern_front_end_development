# Generated by Django 5.0.3 on 2024-03-16 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clutch',
            fields=[
                ('Item_Service_No', models.IntegerField(primary_key=True, serialize=False)),
                ('Part_No', models.CharField(max_length=50)),
                ('Description', models.TextField()),
            ],
        ),
    ]
