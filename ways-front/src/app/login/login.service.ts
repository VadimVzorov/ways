import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgZone } from '@angular/core';

import { AuthService } from 'angular2-social-login';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private authService: AuthService,
        private cookieService: CookieService,
        private zone: NgZone
    ) { }

    APIurl = 'http://localhost:8000/auth/convert-token?t=1';

    login(provider): any {
        if (provider === 'facebook') {
            this.authService.login(provider)
                .subscribe(data => {
                    const token = data['token'];
                    // get converted token
                    this.convertToken(provider, token)
                        .subscribe(token_data => {
                            this.cookieService.set('token', token_data.access_token);
                            this.goHome();
                        });
                });
        }
        // const request = this.authService.login(provider);
        // return request;
    }

    // sends request to backend to convert token
    convertToken(provider, token): any {
        const auth_params = new HttpParams()
            .set('grant_type', 'convert_token')
            .set('backend', provider)
            .set('token', token);
        // send token to backend
        const response = this.http.post(
            this.APIurl, auth_params
        );
        return response;
    }

    goHome(): void {
        this.zone.run(() => this.router.navigate(['home']));
    }

    goLogin(): void {
        this.router.navigate(['']);
    }

    checkCookieTokenAndNavigate(url): void {
        const token_exists = this.cookieService.check('token');
        if (token_exists === false) {
            this.router.navigate(url);
        }
    }

}
