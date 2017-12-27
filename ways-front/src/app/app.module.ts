import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { Angular2SocialLoginModule } from 'angular2-social-login';
import { CookieService } from 'ngx-cookie-service';

import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { FriendsComponent } from './friends/friends.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesSearchComponent } from './cities-search/cities-search.component';
import { FriendsSearchComponent } from './friends-search/friends-search.component';
import { AddRemoveCitiesComponent } from './add-remove-cities/add-remove-cities.component';
import { AddRemoveFriendsComponent } from './add-remove-friends/add-remove-friends.component';
import { CityShareComponent } from './city-share/city-share.component';
import { CityFriendsComponent } from './city-friends/city-friends.component';
import { CityPlacesComponent } from './city-places/city-places.component';
import { PlacesComponent } from './places/places.component';
import { AddRemovePlacesComponent } from './add-remove-places/add-remove-places.component';
import { PlacesSearchComponent } from './places-search/places-search.component';

const social_providers = {
  'facebook': {
    'clientId': '1423188991085328',
    'apiVersion': 'v2.9'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BottomMenuComponent,
    FriendsComponent,
    NotificationsComponent,
    CitiesComponent,
    CitiesSearchComponent,
    FriendsSearchComponent,
    AddRemoveCitiesComponent,
    AddRemoveFriendsComponent,
    CityShareComponent,
    CityFriendsComponent,
    CityPlacesComponent,
    PlacesComponent,
    AddRemovePlacesComponent,
    PlacesSearchComponent,
    CityShareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Angular2SocialLoginModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(social_providers);
