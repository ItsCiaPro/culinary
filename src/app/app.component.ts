import { Component, inject } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { PantryService } from "./pantry.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  pantry = inject(PantryService);
  router = inject(Router);
  query = "";
  nav = [
    { path: "/", label: "Início", icon: "⌂" },
    { path: "/receitas", label: "Receitas", icon: "♨" },
    { path: "/videos", label: "Vídeos", icon: "▶" },
    { path: "/postar", label: "Postar", icon: "✎" },
    { path: "/despensa", label: "Despensa", icon: "▣" },
    { path: "/compras", label: "Compras", icon: "🛒" },
  ];
  search(e: Event) {
    e.preventDefault();
    this.router.navigate(["/receitas"], {
      queryParams: { q: this.query || null },
    });
  }
}
