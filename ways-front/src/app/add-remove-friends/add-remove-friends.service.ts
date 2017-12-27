import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class AddRemoveFriendsService {

    constructor(
        private http: HttpClient
    ) { }

    // send put request to server to change 'following' to true for the friend object
    addFriend(friend_id): any {
        const APIurl = 'http://localhost:8882/friends/add';
        const body = {
            'id': friend_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }

    // send put request to server to change 'following' to false for the friend object
    removeFriend(friend_id): any {
        const APIurl = 'http://localhost:8882/friends/remove';
        const body = {
            'id': friend_id
        };
        const response = this.http.put(APIurl, body);
        return response;
    }

}
