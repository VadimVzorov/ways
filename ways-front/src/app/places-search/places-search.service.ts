import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

import { Place } from '../city-places/place';

@Injectable()
export class PlacesSearchService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    // url for api request
    APIurl = 'http://localhost:8882/places/search';

    // Send request to the server with search paramaters
    getPlaces(query): any {
        const search_params = new HttpParams()
            .set('place', query);

        const response = this.http.get(
            this.APIurl, { params: search_params });

        return response;
    }

    // route to the selected city
    gotoPlace(place_id): void {
        console.log('click');
    }

}