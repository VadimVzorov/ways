from cities.models import User_data
from django.contrib.auth.models import User

from django.dispatch import receiver
from django.db.models.signals import post_save

#creates UserData instance for new user
@receiver(post_save, sender=User)
def user_register_handler(sender, instance, created, **kwargs):
    if created:
        user_data = User_data(user=instance, id=instance.id)
        user_data.save()