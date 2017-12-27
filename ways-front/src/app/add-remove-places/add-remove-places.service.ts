import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class AddRemovePlacesService {

    constructor(
        private http: HttpClient
    ) { }

    // send put request to server to change following to true/false for a place
    addPlace(place_id): any {
        const APIurl = 'http://localhost:8882/places/add';
        const body = {
            'id': place_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }

    removePlace(place_id): any {
        const APIurl = 'http://localhost:8882/places/remove';
        const body = {
            'id': place_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }
}