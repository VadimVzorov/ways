import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { City } from '../cities-search/city';

@Injectable()
export class CitiesService {

    constructor(
        private http: HttpClient
    ) { }

    // get the list of all cities of the current user with 'following' true
    getAllCities(): any {
        const response = this.http.get('http://localhost:8882/cities');
        return response;
    }

}
