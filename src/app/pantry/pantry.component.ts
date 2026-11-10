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
  items() {
    return this.q
      ? CATEGORIES.flatMap((c) => c.items).filter((i) =>
          i.toLowerCase().includes(this.q.toLowerCase()),
        )
      : CATEGORIES.find((c) => c.id === this.cat)!.items;
  }
}
