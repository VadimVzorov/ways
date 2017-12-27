import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Friend } from './friend';

@Injectable()
export class FriendsService {

    constructor(
        private http: HttpClient
    ) { }

    // catch errors from server requests (see Angular TOH turorial HTTP part for more details)
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // get the list of all friends of the current user with 'following' true
    getAllFriends(): any {
        const response = this.http.get('http://localhost:8882/friends');
        return response;
    }

}
