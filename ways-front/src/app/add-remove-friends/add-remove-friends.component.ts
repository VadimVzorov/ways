import { Component, OnInit, Input } from '@angular/core';

import { Friend } from '../friends/friend';
import { AddRemoveFriendsService } from './add-remove-friends.service';

@Component({
  selector: 'app-add-remove-friends',
  templateUrl: './add-remove-friends.component.html',
  styleUrls: ['./add-remove-friends.component.css'],
  providers: [AddRemoveFriendsService]
})
export class AddRemoveFriendsComponent {

  @Input() friend: Friend;

  constructor(
    private addRemoveFriendsService: AddRemoveFriendsService
  ) { }

  add(): void {
    this.addRemoveFriendsService.addFriend(this.friend.id)
      .subscribe(friend => {
        this.friend.following = friend[0].following;
      });
  }

  remove(): void {
    this.addRemoveFriendsService.removeFriend(this.friend.id)
      .subscribe(friend => {
        this.friend.following = friend[0].following;
      });
  }


}
