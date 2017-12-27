import { Component, OnInit } from '@angular/core';

import { BottomMenuService } from './bottom-menu.service';

@Component({
    selector: 'app-bottom-menu',
    templateUrl: './bottom-menu.component.html',
    styleUrls: ['./bottom-menu.component.css'],
    providers: [BottomMenuService]
})
export class BottomMenuComponent {

}