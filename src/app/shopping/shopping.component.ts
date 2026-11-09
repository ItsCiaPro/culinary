import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PantryService } from "../pantry.service";

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./shopping.component.html",
  styleUrl: "./shopping.component.css",
})
export class ShoppingComponent {
  pantry = inject(PantryService);
}
