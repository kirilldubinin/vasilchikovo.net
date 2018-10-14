import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../objects/recipe';

@Component({
    selector: 'v-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
    selectedRecipe: Recipe;

    onSelect(recipe: Recipe): void {
        this.selectedRecipe = recipe;
    }
    constructor() { }
    ngOnInit() {
    }
}