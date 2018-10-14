import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'v-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    todayDateTime: Date;
    constructor() { }
    ngOnInit() {
        this.todayDateTime = new Date();
    }
}