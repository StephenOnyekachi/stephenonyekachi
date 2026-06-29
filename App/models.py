
from django.db import models
from django.contrib.auth.models import User #AbstractUser
from django.utils.text import slugify
import uuid
from datetime import timedelta
from django.utils import timezone

# Create your models here.

class Sample(models.Model):

    # STATUS_CHOICES = [
    #     ('avaliable', 'Avaliable'),
    #     ('inavaliable', 'Inavaliable'),
    # ]

    # CATEGORY_CHOICES = [
    #     ('rice', 'Rice'),
    #     ('beans', 'Beans'),
    #     ('soop', 'Soop'),
    #     ('swalow', 'Swalow'),
    #     ('meat', 'Meat'),
    #     ('fish', 'Fish'),
    # ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sample_poster')
    image = models.ImageField(upload_to='picture', blank=True, null=True)
    name = models.CharField(max_length=200)
    link = models.CharField(max_length=500)
    description = models.TextField(null=True, blank=True)
    date_added = models.DateField(auto_now_add=True)

    # status = models.CharField(
    #     max_length=20,
    #     choices=STATUS_CHOICES,
    #     default='active'
    # )
    # category = models.CharField(
    #     max_length=50, 
    #     choices=CATEGORY_CHOICES, 
    #     default='other'
    # )

    def __str__(self):
        return f"{self.name} - {self.name}"
    

class Store(models.Model):

    STATUS_CHOICES = [
        ('avaliable', 'Avaliable'),
        ('unavaliable', 'Unavaliable'),
    ]

    CATEGORY_CHOICES = [
        ('laptop', 'Laptop'),
        ('phone', 'Phone'),
        ('charger', 'Charger'),
        ('cord', 'Cord'),
        ('others', 'Others'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='store_poster')
    image = models.ImageField(upload_to='picture', blank=True, null=True)
    name = models.CharField(max_length=200)
    number = models.CharField(max_length=20, blank=True)
    description = models.TextField(null=True, blank=True)
    date_added = models.DateField(auto_now_add=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='active'
    )
    category = models.CharField(
        max_length=50, 
        choices=CATEGORY_CHOICES, 
        default='other'
    )

    def __str__(self):
        return f"{self.name} - {self.number}"
    
