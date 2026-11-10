import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { RECIPES, matchRecipe, recipeImageUrl } from "../data";
import { PantryService } from "../pantry.service";
import { IconComponent } from "../shared/icon.component";
import { RecipesService } from "../recipes.service";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./recipes.component.html",
  styleUrl: "./recipes.component.css",
})
export class RecipesComponent {
  pantry = inject(PantryService);
  sessionRecipes = inject(RecipesService);
  q = inject(ActivatedRoute).snapshot.queryParamMap.get("q") || "";
  imageUrl = recipeImageUrl;
  get matches() {
    return [...this.sessionRecipes.sessionRecipes(), ...RECIPES].map((r) =>
      matchRecipe(r, this.pantry.ingredients(), this.pantry.machines()),
    );
  }
  private matchingSearch() {
    return this.q
      ? this.matches.filter((match) =>
          match.recipe.name.toLowerCase().includes(this.q.toLowerCase()),
        )
      : this.matches;
  }
  get ready() {
    return this.matchingSearch().filter((match) => match.status === "pode");
  }
  get almost() {
    return this.matchingSearch().filter((match) => match.status === "quase");
  }
  get rest() {
    return this.matchingSearch().filter((match) => match.status === "longe");
  }
}
