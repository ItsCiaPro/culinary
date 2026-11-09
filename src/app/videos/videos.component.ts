import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RECIPES } from "../data";

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./videos.component.html",
  styleUrl: "./videos.component.css",
})
export class VideosComponent {
  recipes = RECIPES;
  authors = [
    "@chefaninha",
    "@seuzecozinha",
    "@donaflor",
    "@paneladepressao",
    "@receitadavo",
    "@mastercuca",
    "@fogaoalto",
    "@docesdaju",
  ];
}
