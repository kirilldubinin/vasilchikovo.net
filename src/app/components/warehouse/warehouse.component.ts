import { Component, OnInit } from '@angular/core';
import { Bunker } from '../../objects/bunker';

@Component({
    selector: 'warehouse-component',
    templateUrl: './warehouse.component.html',
    styleUrls: ['./warehouse.component.scss']
})
export class WareHouseComponent implements OnInit {
    bunkers: Object[];
    constructor() { }

    editBunker (bunker) {
        debugger;
    }

    ngOnInit() {
        this.bunkers = [
            {
                id: 1,
                elementName: 'горох',
                bunker: '04',
                fullWeight: 5000,
                weight: 2700
            },
            {
                id: 2,
                elementName: 'ячмень',
                bunker: '03',
                fullWeight: 12000,
                weight: 7300
            },
            {
                id: 3,
                elementName: 'кукуруза',
                bunker: '02',
                fullWeight: 5000,
                weight: 2200
            },
            {
                id: 4,
                elementName: 'пшеница',
                bunker: '01',
                fullWeight: 12000,
                weight: 3300
            }
        ];
    }
}