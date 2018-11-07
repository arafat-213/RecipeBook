import { EventEmitter, Output, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe> ();
  private recipes: Recipe[] = [
    new Recipe('Biryani',
    'The real biryani',
    `https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg`,
    [
      new Ingredient('Rice', 100),
      new Ingredient('Chicken', 75)
    ]),
    new Recipe('Veg Biryani',
    'Pulao kehte hai isse!!!',
    'https://www.ndtv.com/cooks/images/vegetable.biryani.jpg',
    [
      new Ingredient('Tatti', 1000),
      new Ingredient('Self-humiliation', 10000)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    // slice() returns a copy of array while with out  slice() js will return refernce to the array
    // For security purposes it is recommended to return value and not reference
    return this.recipes.slice();
  }

  addIngredientsToCart(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
