import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

import { Task } from './../../objects/task';

/*const tasksMock = [{
    date: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    energy: 210,
    result: 2200,
    tasks: [
        {
            id: 1,
            date: new Date(),
            number: '013',
            name: '',
            type: 'recipe',
            weight: 500,
            recipeId: 1,
            status: 'done'
        },
        {
            id: 2,
            date: new Date(),
            number: '014',
            name: '',
            type: 'recipe',
            weight: 500,
            recipeId: 1,
            status: 'done'
        },
    ]

}];*/

const tasksMock = [{
    id: 1,
    date: new Date(),
    type: 'recipe',
    number: '013',
    name: 'Feedy Red',
    dateTimeStart: new Date(),
    dateTimeEnd: new Date(),
    weight: 500,
    recipeId: 1
}, {
    id: 2,
    type: 'recipe',
    number: '44-18',
    name: 'Feedy Green',
    dateTimeStart: new Date(),
    dateTimeEnd: new Date(),
    weight: 2600,
    recipeId: 2
}, {
    id: 3,
    type: 'technical',
    number: '45-18',
    name: 'Смазка экструдера',
    dateTimeStart: new Date(),
    dateTimeEnd: new Date()
}];

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'v-tasks',
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.scss']
})
export class TasksComponent implements OnInit {
    tasks: Task[];
    constructor() {
    }

    ngOnInit() {
        this.tasks = tasksMock;
    }
}