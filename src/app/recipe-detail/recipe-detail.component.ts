import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { RECIPES, matchRecipe, recipeImageUrl } from "../data";
import { PantryService } from "../pantry.service";
import { IconComponent } from "../shared/icon.component";
import { RecipesService } from "../recipes.service";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./recipe-detail.component.html",
  styleUrl: "./recipe-detail.component.css",
})
export class RecipeDetailComponent {
  pantry = inject(PantryService);
  private readonly sessionRecipes = inject(RecipesService);
  id = inject(ActivatedRoute).snapshot.paramMap.get("id");
  recipe = [
    ...this.sessionRecipes.sessionRecipes(),
    ...RECIPES,
  ].find((r) => r.id === this.id);
  imageUrl = recipeImageUrl;
  missing = this.recipe
    ? matchRecipe(
        this.recipe,
        this.pantry.ingredients(),
        this.pantry.machines(),
      ).missing
    : [];
}
