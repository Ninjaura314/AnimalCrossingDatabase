import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';
import HOUSEWARES from '../../assets/data/crafting/housewares.json';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  recipes_base = HOUSEWARES;
  recipes = [];
  selected_recipe: Object;


  constructor() {

  }

  ngOnInit(): void {
    for(var k in this.recipes_base){ this.recipes.push(k);}
    console.log(this.recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selected_recipe = recipe;
  }

}
