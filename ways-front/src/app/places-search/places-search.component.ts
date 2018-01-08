import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Place } from '../city-places/place';
import { LinkData } from '../city-places/link_data';
import { PlacesSearchService } from './places-search.service';

@Component({
  selector: 'app-places-search',
  templateUrl: './places-search.component.html',
  styleUrls: ['./places-search.component.css'],
  providers: [PlacesSearchService]
})
export class PlacesSearchComponent implements OnInit {

  recommendations: Place[] = [];
  filteredPlaces: Place[] = [];
  @Input() linkData: LinkData;

  // Output events to start search or stop it based on user input
  @Output() start: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();

  private userInput = new Subject<string>();

  constructor(
    private placesSearchService: PlacesSearchService,
    // private elementRef: ElementRef -- used to listen for clicks outside
  ) { }

  ngOnInit(): void {

    // listen to 'userInput' Subject (user typing search) and calling
    // filterCities function with a delay
    this.userInput
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(query => {
        // send request to server to perform search
        this.displayPlaces(query);
      });

  }

  // push user query into observable stream
  search(query: string): void {
    this.userInput.next(query);
  }

  // send request to server to search for cities
  displayPlaces(query: string): void {
    if (query !== '') {
      this.placesSearchService.getPlaces(query, this.linkData, this.recommendations)
        .subscribe(places => {
          // send event that user is searching
          this.start.emit(query);
          // update list of cities with search results
          this.filteredPlaces = places.results;
        });
    } else {
      // send event that user stopped searching
      this.stop.emit(null);
      // empty the list of cities
      this.filteredPlaces = [];
    }
  } 

  addPlace(place) {
    this.recommendations.push(place);
    // remove place from filteredPlaces
    this.filteredPlaces.splice(
      this.filteredPlaces.indexOf(place),
      1
    );

  }

}
