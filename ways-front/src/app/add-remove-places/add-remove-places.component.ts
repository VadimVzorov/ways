import { Component, OnInit, Input } from '@angular/core';

import { Place } from '../city-places/place';
import { AddRemovePlacesService } from './add-remove-places.service';

@Component({
  selector: 'app-add-remove-places',
  templateUrl: './add-remove-places.component.html',
  styleUrls: ['./add-remove-places.component.css'],
  providers: [AddRemovePlacesService]
})
export class AddRemovePlacesComponent {

  @Input() place: Place;

  constructor(
    private addRemovePlacesService: AddRemovePlacesService
  ) { }

  add(): void {
    
    // this.addRemovePlacesService.addPlace(this.place.id)
    //   .subscribe(place => {
    //     this.place.following = place.following;
    //   });
  }

  remove(): void {
  //   this.addRemovePlacesService.removePlace(this.place.id)
  //     .subscribe(place => {
  //       this.place.following = place.following;
  //     });
  // }

}
