import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.css",
})
export class ProfileComponent {}
