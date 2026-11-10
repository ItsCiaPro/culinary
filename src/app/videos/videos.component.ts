import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { RECIPES, type Recipe } from "../data";
import { IconComponent } from "../shared/icon.component";

@Component({
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: "./videos.component.html",
  styleUrl: "./videos.component.css",
})
export class VideosComponent {
  recipes = RECIPES;
  activeIndex = 0;
  slideDirection: "next" | "previous" = "next";
  private touchStartY: number | null = null;
  private lastWheelNavigation = 0;
  authors = [
    "@chefaninha",
    "@seuzecozinha",
    "@donaflor",
    "@paneladepressao",
    "@receitadavo",
    "@mastercuca",
    "@fogaoalto",
    "@docesdaju",
  ];

  get activeRecipe(): Recipe {
    return this.recipes[this.activeIndex];
  }

  get activeAuthor(): string {
    return this.authors[this.activeIndex % this.authors.length];
  }

  showPrevious(): void {
    if (this.activeIndex > 0) {
      this.slideDirection = "previous";
      this.activeIndex--;
    }
  }

  showNext(): void {
    if (this.activeIndex < this.recipes.length - 1) {
      this.slideDirection = "next";
      this.activeIndex++;
    }
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    if (Math.abs(event.deltaY) < 20) return;

    const now = Date.now();
    if (now - this.lastWheelNavigation < 450) return;
    this.lastWheelNavigation = now;

    if (event.deltaY > 0) {
      this.showNext();
    } else {
      this.showPrevious();
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartY = event.changedTouches[0]?.screenY ?? null;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.touchStartY === null) return;

    const touchEndY = event.changedTouches[0]?.screenY;
    if (touchEndY === undefined) return;

    const swipeDistance = this.touchStartY - touchEndY;
    this.touchStartY = null;
    if (Math.abs(swipeDistance) < 50) return;

    if (swipeDistance > 0) {
      this.showNext();
    } else {
      this.showPrevious();
    }
  }

}
