import { Injectable } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs/Subject';

import { City } from '../cities-search/city';
import { LinkData } from './link_data';

@Injectable()
export class CityPlacesService {

    link_id: string;
    link_data = new Subject<any>();
    APIurl = 'http://localhost:8000/link/search';

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    getLinkInfo() {

        // get link_id from the url
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                this.link_id = params.get('link_id');
            });

        this.sendLink()
            .subscribe(data => {
                this.link_data.next(data);
            });
    }

    // send request to the server to get info about link
    sendLink() {
        const auth_headers = new HttpHeaders()
            .set('Authorization', `Bearer ${this.cookieService.get('token')}`);

        const search_params = new HttpParams()
            .set('link_id', this.link_id);

        const response = this.http.get(
            this.APIurl,
            {
                params: search_params,
                headers: auth_headers
            }
        );

        return response;
    }


}