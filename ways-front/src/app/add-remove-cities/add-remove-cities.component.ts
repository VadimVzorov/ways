import { Component, OnInit, Input } from '@angular/core';

import { City } from '../cities-search/city';
import { AddRemoveCitiesService } from './add-remove-cities.service';

@Component({
  selector: 'app-add-remove-cities',
  templateUrl: './add-remove-cities.component.html',
  styleUrls: ['./add-remove-cities.component.css'],
  providers: [AddRemoveCitiesService]
})
export class AddRemoveCitiesComponent {

// add/remove requests to the server
// as a response --> a new city object

  @Input() city: City;

  constructor(
    private addRemoveCitiesService: AddRemoveCitiesService
  ) { }

  add(): void {
    this.addRemoveCitiesService.addCity(this.city.id)
      .subscribe(city => {
        this.city.following = city[0].following; // do i have to put index in the array here?
      });
  }

  remove(): void {
    this.addRemoveCitiesService.removeCity(this.city.id)
      .subscribe(city => {
        this.city.following = city[0].following;
      });
  }

  }
