from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User

from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

LEXERS = [item for item in get_all_lexers() if item[1]]
LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
STYLE_CHOICES = sorted((item, item) for item in get_all_styles())

#add it on sign up
class User_data(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class City(models.Model):
    country = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=10, decimal_places=5)
    lng = models.DecimalField(max_digits=10, decimal_places=5)
    users = models.ManyToManyField(User_data, through='Link')

class Place(models.Model):
    google_place_id = models.CharField(max_length=200)
    formatted_address = models.CharField(max_length=200)
    lat = models.DecimalField(max_digits=10, decimal_places=5)
    lng = models.DecimalField(max_digits=10, decimal_places=5)
    name = models.CharField(max_length=100)
    types = ArrayField(models.CharField(max_length=100), default=list())

class Link(models.Model):
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    user = models.ForeignKey(User_data, on_delete=models.CASCADE)
    places = models.ManyToManyField(Place, through='Recommendation')

class Recommendation(models.Model):
    place = models.ForeignKey(Place)
    link = models.ForeignKey(Link)

















