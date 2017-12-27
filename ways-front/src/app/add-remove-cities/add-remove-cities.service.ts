import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class AddRemoveCitiesService {

    constructor(
        private http: HttpClient
    ) { }

    // send put request to server to change 'following' to true for the city object
    addCity(city_id): any {
        const APIurl = 'http://localhost:8882/cities/add';
        const body = {
            'id': city_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }

    // send put request to server to change 'following' to false for the city object
    removeCity(city_id): any {
        const APIurl = 'http://localhost:8882/cities/remove';
        const body = {
            'id': city_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }

}
