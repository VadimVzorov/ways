import { Injectable } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Friend } from '../friends/friend';

@Injectable()
export class CityFriendsService {

    constructor (
        private route: ActivatedRoute,
        private http: HttpClient
    ) { }

    // get friends who have recommendations for the current city
    getFriends(): any {
        let city_id: string;

        // get city_id from the url
        this.route.paramMap
            .subscribe((params: ParamMap) => {
                city_id = params.get('id');
            });

        const APIurl = 'http://localhost:8882/cities/city/friends';

        const search_params = new HttpParams()
            .set('id', city_id);

        const response = this.http.get(
            APIurl, { params: search_params });

        return response;

    }
}
