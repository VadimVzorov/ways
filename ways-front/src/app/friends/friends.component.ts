import { Component, OnInit } from '@angular/core';

import { FriendsService } from './friends.service';
import { Friend } from './friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendsService]
})
export class FriendsComponent implements OnInit {

  friends: Friend[];
  query = '';

  constructor(
    private friendsService: FriendsService
  ) { }

  ngOnInit() {

    // get list of current friends and put it in the friends var
    this.friendsService.getAllFriends()
      .subscribe(friends => this.friends = friends);

  }

  onStart(query: string) {
    this.query = query;
  }

  onStop() {
    this.query = '';
  }

}
