import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CityShareService {

    city = new Subject<any>();

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    getCity() {
        let city_id: string;

        // get city_id from the url
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                city_id = params.get('id');
            });

        const APIurl = 'http://localhost:8000/cities/add';

        const auth_headers = new HttpHeaders()
            .set('Authorization', `Bearer ${this.cookieService.get('token')}`);

        const body = {
            'city_id': city_id
        };

        const response = this.http.put(
            APIurl, body, {
                headers: auth_headers
            });

        response.subscribe(city => {
            const city_data = {
                id: city_id,
                name: city['name'],
                link_id: city['link']
            };
            this.city.next(city_data);
        });
    }
}
