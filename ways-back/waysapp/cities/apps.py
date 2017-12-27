from django.apps import AppConfig


class CitiesConfig(AppConfig):
    name = 'cities'

    def ready(self):
        import cities.signals