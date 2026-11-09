import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { RECIPES, matchRecipe } from "../data";
import { PantryService } from "../pantry.service";

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./recipes.component.html",
  styleUrl: "./recipes.component.css",
})
export class RecipesComponent {
  pantry = inject(PantryService);
  q = inject(ActivatedRoute).snapshot.queryParamMap.get("q") || "";
  filters = ["Posso fazer", "Falta pouco", "Todas"];
  filter = this.q ? "Todas" : "Posso fazer";
  list() {
    let a = RECIPES.map((r) =>
      matchRecipe(r, this.pantry.ingredients(), this.pantry.machines()),
    );
    if (this.filter === "Posso fazer") a = a.filter((x) => x.status === "pode");
    if (this.filter === "Falta pouco")
      a = a.filter((x) => x.status === "quase");
    if (this.q)
      a = a.filter((x) =>
        x.recipe.name.toLowerCase().includes(this.q.toLowerCase()),
      );
    return a;
  }
}
