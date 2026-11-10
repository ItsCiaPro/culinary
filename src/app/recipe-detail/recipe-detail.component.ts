import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { RECIPES, matchRecipe } from "../data";
import { PantryService } from "../pantry.service";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./recipe-detail.component.html",
  styleUrl: "./recipe-detail.component.css",
})
export class RecipeDetailComponent {
  pantry = inject(PantryService);
  id = inject(ActivatedRoute).snapshot.paramMap.get("id");
  recipe = RECIPES.find((r) => r.id === this.id);
  missing = this.recipe
    ? matchRecipe(
        this.recipe,
        this.pantry.ingredients(),
        this.pantry.machines(),
      ).missing
    : [];
}
