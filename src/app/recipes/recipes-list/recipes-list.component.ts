import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] ;
  // = [
  //   new Recipe('Biryani', 'The real biryani', `https://www.ndtv.com/cooks/images/dum.murg.ki.kacchi.biryani.jpg`),
  //   // tslint:disable-next-line:max-line-length
  // ];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
