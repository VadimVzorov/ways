from rest_framework.authentication import BaseAuthentication, get_authorization_header

class LoginMiddleware(object):

    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration and initialization.

    def __call__(self, request):
        auth_header = get_authorization_header(request)
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        #Add Django authentication app client data to the request
        request.POST = request.POST.copy()
        request.POST['client_id'] = 'nXmE3bqYCAZcjlGGdak2HGwlM9FkX6hxZmyaYv3D'
        request.POST['client_secret'] = 'Qi7t0fr2wh1WkCOiSexgxXLRqBqCqnRqDfpOTshbEGwVLssAOGJniLCCmyD61nJleUHVROuJHiZvCi75wsYnmfAlB0TLG3PzMJxfursl7cpTzQ13YzRrMx9WwaGh7YIh'

        response = self.get_response(request)

        # Code to be executed for each request/response after
        # the view is called.

        return response
