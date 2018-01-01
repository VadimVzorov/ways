from django.conf import settings
import requests

api_key = settings.GOOGLE_API_KEY
api_url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'

def search_google_places(lat, lng, query, radius):
    url_params = {
        'location': '%s,%s' % (lat, lng),
        'query': query,
        'radius': radius,
        'key': api_key
    } 
    response = requests.get(api_url, params=url_params).json()
    #filter response data
    if response['status'] == 'OK':
        search_results = {
            'results': [],
        }
        #loop through place data and get neccessary info
        for place in response['results']:
            place_data = {
                'google_place_id': place['place_id'],
                'formatted_address': place['formatted_address'],
                'lat': place['geometry']['location']['lat'],
                'lng': place['geometry']['location']['lng'],
                'name': place['name'],
                'types': place['types']
            }
            search_results['results'].append(place_data)
    else:
        #send error message
        pass

    return search_results
