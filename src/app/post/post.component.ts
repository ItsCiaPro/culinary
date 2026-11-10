import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [FormsModule, IconComponent],
  templateUrl: "./post.component.html",
  styleUrl: "./post.component.css",
})
export class PostComponent {
  ingredient = "";
  ingredients: string[] = [];
  steps = [""];
  add() {
    const v = this.ingredient.trim();
    if (v && !this.ingredients.includes(v)) this.ingredients.push(v);
    this.ingredient = "";
  }
  removeIngredient(ingredient: string) {
    this.ingredients = this.ingredients.filter(
      (currentIngredient) => currentIngredient !== ingredient,
    );
  }
  submit(e: Event) {
    e.preventDefault();
    alert("Receita enviada para análise! (demonstração)");
  }
}
