import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { City } from './city';
import { CitiesSearchService } from './cities-search.service';

@Component({
  selector: 'app-cities-search',
  templateUrl: './cities-search.component.html',
  styleUrls: ['./cities-search.component.css'],
  providers: [CitiesSearchService]
})
export class CitiesSearchComponent implements OnInit {
  filteredCities: City[] = [];

  // Output events to start search or stop it based on user input
  @Output() start: EventEmitter<any> = new EventEmitter();
  @Output() stop: EventEmitter<any> = new EventEmitter();

  private userInput = new Subject<string>();

  constructor(
    private citiesSearchService: CitiesSearchService,
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
        this.displayCities(query);
      });

  }

  // push user query into observable stream
  search(query: string): void {
    this.userInput.next(query);
  }

  // send request to server to search for cities
  displayCities(query: string): void {
    if (query !== '' ) {
      this.citiesSearchService.getCities(query)
        .subscribe(cities => {
          // send event that user is searching
          this.start.emit(query);
          // update list of cities with search results
          this.filteredCities = cities;
        });
    } else {
      // send event that user stopped searching
      this.stop.emit(null);
      // empty the list of cities
      this.filteredCities = [];
    }
  }

  selectCity(city_id) {
    this.citiesSearchService.gotoCity(city_id);
  }
}
