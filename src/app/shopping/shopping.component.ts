import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PantryService } from "../pantry.service";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./shopping.component.html",
  styleUrl: "./shopping.component.css",
})
export class ShoppingComponent {
  pantry = inject(PantryService);
}
