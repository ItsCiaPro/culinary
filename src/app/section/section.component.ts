import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Recipe } from "../data";

@Component({
  selector: "app-section",
  standalone: true,
  imports: [RouterLink],
  inputs: ["title", "recipes"],
  templateUrl: "./section.component.html",
  styleUrl: "./section.component.css",
})
export class SectionComponent {
  title = "";
  recipes: Recipe[] = [];
}
