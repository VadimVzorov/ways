import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Friend } from '../friends/friend';

@Injectable()
export class FriendsSearchService {

    constructor(
        private elementRef: ElementRef,
        private http: HttpClient
    ) { }

    // url for api request
    APIurl = 'http://localhost:8882/friends/search';

    // Send request to the server with search paramaters
    getFriends(query): any {
        const search_params = new HttpParams()
            .set('name', query);

        const response = this.http.get(
            this.APIurl, { params: search_params });

        return response;
    }


}


// filterFriends(query): any {
//     if (query !== '') {
//         const friends = this.getFriends()
//             .toPromise()
//             .then((data: any) => {
//                 const filteredFriends = data.filter(
//                     // x is a 'Friend' object from aray --> need to filter searching through
//                     // firstName and lastName
//                     function (x) {
//                         // if function to search through firstName and then lastName
//                         const firstNameMatch = function (): boolean {
//                             return x.firstName.toLowerCase().indexOf(query.toLowerCase()) > -1;
//                         };
//                         const lastNameMatch = function (): boolean {
//                             return x.lastName.toLowerCase().indexOf(query.toLowerCase()) > -1;
//                         };
//                         const searchCheck = firstNameMatch() || lastNameMatch() ? true : false;

//                         return searchCheck;
//                     }
//                 );
//                 return filteredFriends;
//             });
//         return friends;
//     } else {
//         const filteredFriends = Promise.resolve([]);
//         return filteredFriends;
//     }
// }
