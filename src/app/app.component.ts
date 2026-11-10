import { Component, inject } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { PantryService } from "./pantry.service";
import { IconComponent, type IconName } from "./shared/icon.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  pantry = inject(PantryService);
  router = inject(Router);
  query = "";
  get isVideosPage(): boolean {
    return this.router.url.startsWith("/videos");
  }
  nav: { path: string; label: string; icon: IconName }[] = [
    { path: "/", label: "Início", icon: "home" },
    { path: "/receitas", label: "Receitas", icon: "recipe" },
    { path: "/videos", label: "Vídeos", icon: "video" },
    { path: "/postar", label: "Postar", icon: "edit" },
    { path: "/despensa", label: "Despensa", icon: "pantry" },
    { path: "/compras", label: "Compras", icon: "cart" },
  ];
  search(e: Event) {
    e.preventDefault();
    this.router.navigate(["/receitas"], {
      queryParams: { q: this.query || null },
    });
  }
}
