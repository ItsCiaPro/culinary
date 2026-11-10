import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Recipe, recipeImageUrl } from "../data";
import { IconComponent } from "../shared/icon.component";

@Component({
  selector: "app-section",
  standalone: true,
  imports: [RouterLink, IconComponent],
  inputs: ["title", "recipes"],
  templateUrl: "./section.component.html",
  styleUrl: "./section.component.css",
})
export class SectionComponent {
  title = "";
  recipes: Recipe[] = [];
  imageUrl = recipeImageUrl;
}
