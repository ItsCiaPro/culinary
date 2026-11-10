import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MACHINES, Recipe } from "../data";
import { RecipesService } from "../recipes.service";
import { IconComponent } from "../shared/icon.component";

interface SelectedPhoto {
  file: File;
  url: string;
}

@Component({
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {
  private readonly recipes = inject(RecipesService);
  private readonly router = inject(Router);
  readonly machines = MACHINES;
  customMachines: { id: string; name: string }[] = [];
  customMachine = "";
  name = "";
  description = "";
  minutes: number | null = null;
  servings: number | null = null;
  ingredient = "";
  ingredients: string[] = [];
  steps = [""];
  selectedMachines: string[] = [];
  photos: SelectedPhoto[] = [];
  stage = 1;
  detailsError = "";
  preview: Recipe | null = null;

  addPhotos(event: Event): void {
    const input = event.target as HTMLInputElement;
    for (const file of Array.from(input.files ?? [])) {
      if (file.type.startsWith("image/")) {
        this.photos.push({ file, url: URL.createObjectURL(file) });
      }
    }
    input.value = "";
  }

  removePhoto(photo: SelectedPhoto): void {
    URL.revokeObjectURL(photo.url);
    this.photos = this.photos.filter((item) => item !== photo);
  }

  add(): void {
    const value = this.ingredient.trim();
    if (value && !this.ingredients.includes(value)) {
      this.ingredients.push(value);
    }
    this.ingredient = "";
  }

  removeIngredient(ingredient: string): void {
    this.ingredients = this.ingredients.filter((item) => item !== ingredient);
  }

  toggleMachine(machineId: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.selectedMachines = checked
      ? [...this.selectedMachines, machineId]
      : this.selectedMachines.filter((id) => id !== machineId);
  }

  addMachine(): void {
    const name = this.customMachine.trim();
    if (!name) return;
    const existing = [...this.machines, ...this.customMachines].find(
      (machine) => machine.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (existing) {
      if (!this.selectedMachines.includes(existing.id)) {
        this.selectedMachines = [...this.selectedMachines, existing.id];
      }
    } else {
      const machine = {
        id: `recipe-custom-${Date.now()}`,
        name,
      };
      this.customMachines = [...this.customMachines, machine];
      this.selectedMachines = [...this.selectedMachines, machine.id];
    }
    this.customMachine = "";
  }

  showPreview(event: Event): void {
    event.preventDefault();
    const steps = this.steps.map((step) => step.trim()).filter(Boolean);
    if (!this.ingredients.length || !steps.length) {
      this.detailsError = "Adicione pelo menos um ingrediente e um passo.";
      return;
    }
    this.detailsError = "";
    this.preview = {
      id: `sessao-${Date.now()}`,
      name: this.name.trim(),
      description: this.description.trim(),
      image: this.photos[0].url,
      images: this.photos.map((photo) => photo.url),
      minutes: Number(this.minutes),
      servings: Number(this.servings),
      rating: 0,
      ingredients: [...this.ingredients],
      machines: [...this.selectedMachines],
      steps,
    };
    this.stage = 3;
  }

  publish(): void {
    if (!this.preview) return;
    this.recipes.add(this.preview);
    void this.router.navigate(["/receita", this.preview.id]);
  }
}
