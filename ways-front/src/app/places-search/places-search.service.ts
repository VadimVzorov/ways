import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';

import { Place } from '../city-places/place';
import { LinkData } from '../city-places/link_data';

@Injectable()
export class PlacesSearchService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    // url for api request
    APIurl = 'http://localhost:8000/places/search';

    // Send request to the server with search paramaters
    getPlaces(query, linkData: LinkData): any {
        const search_params = new HttpParams()
            .set('query', query)
            .set('lat', linkData.lat)
            .set('lng', linkData.lng);


        const response = this.http.get(
            this.APIurl, { params: search_params });

        return response;
    }

    // route to the selected city
    gotoPlace(place_id): void {
        console.log('click');
    }

}