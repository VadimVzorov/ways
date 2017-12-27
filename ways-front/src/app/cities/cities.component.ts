import { Component, OnInit } from '@angular/core';

import { CitiesService } from './citites.service';
import { City } from '../cities-search/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CitiesService]
})
export class CitiesComponent implements OnInit {

  cities: City[];
  query = '';

  constructor(
    private citiesService: CitiesService
  ) { }

  ngOnInit() {

    // get list of current friends and put it in the friends var
    this.citiesService.getAllCities()
      .subscribe(cities => this.cities = cities);

  }

  onStart(query: string) {
    this.query = query;
  }

  onStop() {
    this.query = '';
  }

}
