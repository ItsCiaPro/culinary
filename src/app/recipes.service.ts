import { Injectable, signal } from "@angular/core";
import { Recipe } from "./data";

@Injectable({ providedIn: "root" })
export class RecipesService {
  readonly sessionRecipes = signal<Recipe[]>([]);

  add(recipe: Recipe): void {
    this.sessionRecipes.update((recipes) => [recipe, ...recipes]);
  }
}
