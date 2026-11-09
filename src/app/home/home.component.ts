import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SectionComponent } from "../section/section.component";
import { PantryService } from "../pantry.service";
import { RECIPES, matchRecipe } from "../data";

@Component({
  standalone: true,
  imports: [RouterLink, SectionComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  pantry = inject(PantryService);
  get matches() {
    return RECIPES.map((r) =>
      matchRecipe(r, this.pantry.ingredients(), this.pantry.machines()),
    );
  }
  get ready() {
    return this.matches.filter((x) => x.status === "pode").map((x) => x.recipe);
  }
  get almost() {
    return this.matches.filter((x) => x.status === "quase");
  }
  get almostRecipes() {
    return this.almost.map((match) => match.recipe);
  }
  popular = [...RECIPES].sort((a, b) => b.rating - a.rating).slice(0, 4);
}
