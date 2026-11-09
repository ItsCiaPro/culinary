import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  tab = "entrar";
  submit(e: Event) {
    e.preventDefault();
    alert("Recurso demonstrativo. O login ainda não está ativo.");
  }
}
