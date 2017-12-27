import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

import { AuthService } from '../auth/auth.service';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService]
})
export class HomeComponent {
    
}