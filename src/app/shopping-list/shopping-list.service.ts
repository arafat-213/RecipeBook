import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]> ();
  private ingredients: Ingredient[] = [
    new Ingredient('Oil', 15),
    new Ingredient('Elaichi', 0)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for loop se every time event emit hogi which is not good in terms of performance
    // soo hum ek hi baar me saare add karne k baad event emit karenge
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // ... is a 'seperator' operator of ES6 to convert array into list of items.
    // Is k bina push kiya to pure array ko as a single object push karega
    this.ingredients.push(...ingredients);
    alert('Ingredients are added to your cart');
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
