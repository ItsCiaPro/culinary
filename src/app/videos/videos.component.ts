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
  dragOffset = 0;
  dragging = false;
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
    this.touchStartY = event.changedTouches[0]?.clientY ?? null;
    this.dragOffset = 0;
    this.dragging = true;
  }

  onTouchMove(event: TouchEvent): void {
    if (this.touchStartY === null) return;
    const touchY = event.changedTouches[0]?.clientY;
    if (touchY === undefined) return;
    const offset = touchY - this.touchStartY;
    const atFirstVideo = this.activeIndex === 0 && offset > 0;
    const atLastVideo = this.activeIndex === this.recipes.length - 1 && offset < 0;
    this.dragOffset = atFirstVideo || atLastVideo ? offset * 0.25 : offset;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.touchStartY === null) {
      this.dragging = false;
      return;
    }

    const touchEndY = event.changedTouches[0]?.clientY;
    if (touchEndY === undefined) {
      this.touchStartY = null;
      this.dragging = false;
      this.dragOffset = 0;
      return;
    }

    const swipeDistance = this.touchStartY - touchEndY;
    this.touchStartY = null;
    this.dragging = false;
    const threshold = Math.max(70, window.innerHeight * 0.16);
    if (Math.abs(swipeDistance) < threshold) {
      this.dragOffset = 0;
      return;
    }

    if (swipeDistance > 0) {
      this.showNext();
    } else {
      this.showPrevious();
    }
    this.dragOffset = 0;
  }

}
