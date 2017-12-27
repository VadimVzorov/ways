import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import 'rxjs/add/operator/map';

import { City } from './city';


@Injectable()
export class CitiesSearchService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CookieService
    ) { }

    // url for api request
    APIurl = 'http://127.0.0.1:8000/cities/search';

    // Send request to the server with search paramaters
    getCities(query): any {
        const search_params = new HttpParams()
            .set('city', query);

        const auth_headers = new HttpHeaders()
            .set('Authorization', `Bearer ${this.cookieService.get('token')}`);

        const response = this.http.get(
            this.APIurl,
            {
                params: search_params,
                headers: auth_headers
            }
        );

        return response;
    }

    // route to the selected city
    gotoCity(city_id): void {
        this.router.navigate(['/city', city_id]);
    }

}

