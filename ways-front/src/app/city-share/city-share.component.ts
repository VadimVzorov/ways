import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { City } from '../cities-search/city';
import { CityShareService } from './city-share.service';

@Component({
  selector: 'app-profile-city',
  templateUrl: './city-share.component.html',
  styleUrls: ['./city-share.component.css'],
  providers: [CityShareService]
})
export class CityShareComponent implements OnInit {

  city: any;

  constructor(
    private route: ActivatedRoute,
    private cityShareService: CityShareService
  ) {
    this.cityShareService.city
      .subscribe(city => this.city = city);
   }

  ngOnInit() {
    // get city info from the server
    this.cityShareService.getCity();
  }

}
