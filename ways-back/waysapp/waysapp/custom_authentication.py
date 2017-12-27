from rest_framework.authentication import BaseAuthentication

class MyCustomAuthentication(BaseAuthentication):

    def authenticate(self, request):
        return (None,None)
        
