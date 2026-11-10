import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CATEGORIES, MACHINES } from "../data";
import { PantryService } from "../pantry.service";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink, IconComponent],
  templateUrl: "./pantry.component.html",
  styleUrl: "./pantry.component.css",
})
export class PantryComponent {
  pantry = inject(PantryService);
  categories = CATEGORIES;
  machines = MACHINES;
  cat = CATEGORIES[0].id;
  q = "";
  customIngredient = "";
  customMachine = "";
  items() {
    return this.q
      ? [
          ...CATEGORIES.flatMap((c) => c.items),
          ...this.pantry.customIngredients(),
        ].filter((item) => item.toLowerCase().includes(this.q.toLowerCase()))
      : CATEGORIES.find((c) => c.id === this.cat)!.items;
  }
  addCustomIngredient(event: Event): void {
    event.preventDefault();
    this.pantry.addCustomIngredient(this.customIngredient);
    this.customIngredient = "";
  }
  addCustomMachine(event: Event): void {
    event.preventDefault();
    this.pantry.addCustomMachine(this.customMachine);
    this.customMachine = "";
  }
}
