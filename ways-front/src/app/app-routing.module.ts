import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthService } from './auth/auth.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CitiesComponent } from './cities/cities.component';
import { FriendsSearchComponent } from './friends-search/friends-search.component';
import { CityShareComponent } from './city-share/city-share.component';
import { CityPlacesComponent } from './city-places/city-places.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [ AuthService ]
    },
    {
        path: 'friends',
        component: FriendsComponent,
        canActivate: [AuthService]

    },
    {
        path: 'cities',
        component: CitiesComponent,
        canActivate: [AuthService]

    },
    {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [AuthService]

    },
    {
        path: 'city/:id',
        component: CityShareComponent,
        canActivate: [AuthService]

    },
    {
        path: ':link_id',
        component: CityPlacesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService
    ]
})
export class AppRoutingModule { }
