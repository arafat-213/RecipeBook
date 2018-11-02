import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Biryani', 'The real biryani', `https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg`),
    // tslint:disable-next-line:max-line-length
    new Recipe('Veg Biryani', 'Pulao kehte hai isse!!!', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/veg-biryani-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
