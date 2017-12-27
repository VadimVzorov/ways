import { Component, OnInit } from '@angular/core';

import { Friend } from '../friends/friend';
import { CityShareService } from '../city-share/city-share.service';

@Component({
  selector: 'app-city-friends',
  templateUrl: './city-friends.component.html',
  styleUrls: ['./city-friends.component.css'],
  providers: []
})
export class CityFriendsComponent implements OnInit {

  friends: Friend[];

  constructor(
    private cityShareService: CityShareService
  ) {
      // get list of friends who have recommendations for the current city
      this.cityShareService.city
        .subscribe(city => this.friends = city.followers);
  }

  ngOnInit() {
    // this.cityFriendService.getFriends()
    //   .subscribe(friends => this.friends = friends);
  }

}
