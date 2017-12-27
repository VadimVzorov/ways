import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Friend } from '../friends/friend';

import { FriendsSearchService } from './friends-search.service';

@Component({
  selector: 'app-friends-search',
  templateUrl: './friends-search.component.html',
  styleUrls: ['./friends-search.component.css'],
  providers: [FriendsSearchService]
})
export class FriendsSearchComponent implements OnInit {
  filteredFriends: Friend[] = [];

  // Output events to start search or stop it based on user input
  @Output() start: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();

  private userInput = new Subject<string>();

  constructor(
    private friendsSearchService: FriendsSearchService,
  ) { }

  ngOnInit(): void {

    // listen to 'userInput' Subject (user typing search) and calling
    // filterFriends function with a delay
    this.userInput
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(query => {
        this.displayFriends(query);
      });

  }

  // push user query into observable stream
  search(query: string): void {
    this.userInput.next(query);
  }

  // send request to server to search for friends
  displayFriends(query: string): void {
    if (query !== '') {
      this.friendsSearchService.getFriends(query)
        .subscribe(friends => {
          // send event that user is searching
          this.start.emit(query);
          // update list of cities with search results
          this.filteredFriends = friends;
        });
    } else {
      // send event that user stopped searching
      this.stop.emit(null);
      // empty the list of cities
      this.filteredFriends = [];
    }
  }

  selectFriend(friendName) {
    // do something
  }

}


// // tracks changes in inputed query
// ngOnChanges(changes: SimpleChanges) {
//   if (changes['query']) {
//     if (this.query !== '') {
//       // push user query into observable stream
//       this.userInput.next(this.query);
//     } else {
//       this.filteredFriends = [];
//     }
//   }
// }
