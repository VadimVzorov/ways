from rest_framework import serializers
from cities.models import City, User_data, Link

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'country', 'name', 'lat', 'lng', 'users')

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_data
        fields = ('id', 'user_id')

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ('city', 'user')
