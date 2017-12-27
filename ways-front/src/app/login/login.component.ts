import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from './login.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent  {

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) { }

    login(provider): any {
        this.loginService.login(provider);
    }

}