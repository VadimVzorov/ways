from django.conf.urls import url
from cities import views

urlpatterns = [
    url(r'^cities/search', views.ListCities.as_view()),
    url(r'^cities/add$', views.AddCity.as_view()),
    url(r'^link/search', views.FindLink.as_view()),
    url(r'^places/search', views.FindPlace.as_view()),
]
