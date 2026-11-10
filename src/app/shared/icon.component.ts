import { Component, Input } from "@angular/core";

export type IconName =
  | "pot"
  | "home"
  | "recipe"
  | "video"
  | "edit"
  | "pantry"
  | "cart"
  | "user"
  | "search"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-right"
  | "clock"
  | "star"
  | "servings"
  | "leaf"
  | "meat"
  | "dairy"
  | "grain"
  | "fruit"
  | "seasoning"
  | "can"
  | "bread"
  | "stove"
  | "microwave"
  | "airfryer"
  | "cooker"
  | "fridge"
  | "blender"
  | "oven"
  | "grill"
  | "check"
  | "close"
  | "plus";

@Component({
  selector: "app-icon",
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name) {
        @case ("pot") {
          <path d="M5 10h14l-1 9H6l-1-9Z" />
          <path d="M3 10h18M8 7c-1-1 1-2 0-3m4 3c-1-1 1-2 0-3m4 3c-1-1 1-2 0-3" />
        }
        @case ("home") {
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1V10Z" />
        }
        @case ("recipe") {
          <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
        }
        @case ("video") {
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m10 9 5 3-5 3V9Z" />
        }
        @case ("edit") {
          <path d="m14 6 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z" />
        }
        @case ("pantry") {
          <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
        }
        @case ("cart") {
          <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 1.9-1.4L21 9H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        }
        @case ("user") {
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        }
        @case ("search") {
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 5 5" />
        }
        @case ("arrow-left") {
          <path d="M19 12H5m7 7-7-7 7-7" />
        }
        @case ("arrow-right") {
          <path d="M5 12h14m-7-7 7 7-7 7" />
        }
        @case ("arrow-up-right") {
          <path d="M7 17 17 7M8 7h9v9" />
        }
        @case ("clock") {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        }
        @case ("star") {
          <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
        }
        @case ("servings") {
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20v-1a6 6 0 0 1 12 0v1H3Zm13-12a3 3 0 1 1 2 5.7M18 15a5 5 0 0 1 3 4v1h-3" />
        }
        @case ("leaf") {
          <path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-7 10-16Z" />
          <path d="M4 21c3-5 7-8 12-11" />
        }
        @case ("meat") {
          <path d="M7 7c3-3 8-4 11-1 4 4 1 10-4 13-4 2-9 2-11-1-2-2-1-5 2-7l2-4Z" />
          <circle cx="17" cy="7" r="1" />
        }
        @case ("dairy") {
          <path d="m8 3 8 0 3 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7l3-4Z" />
          <path d="M8 3v4h11M5 10h14" />
        }
        @case ("grain") {
          <path d="M12 21V4m0 4c-4 0-6-2-6-5 4 0 6 2 6 5Zm0 5c-4 0-6-2-6-5 4 0 6 2 6 5Zm0-5c4 0 6-2 6-5-4 0-6 2-6 5Zm0 5c4 0 6-2 6-5-4 0-6 2-6 5Z" />
        }
        @case ("fruit") {
          <path d="M12 8c-5-4-10 0-9 6 1 5 4 8 8 6 1 0 2 0 3 0 4 2 7-1 8-6 1-6-4-10-9-6h-1Z" />
          <path d="M12 8c0-3 2-5 5-5" />
        }
        @case ("seasoning") {
          <path d="M9 4h6v3l2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l2-2V4Z" />
          <path d="M9 7h6m-4-5h2" />
        }
        @case ("can") {
          <path d="M5 6c0-1.1 3.1-2 7-2s7 .9 7 2v12c0 1.1-3.1 2-7 2s-7-.9-7-2V6Z" />
          <path d="M5 6c0 1.1 3.1 2 7 2s7-.9 7-2M5 18c0-1.1 3.1-2 7-2s7 .9 7 2" />
        }
        @case ("bread") {
          <path d="M4 11a4 4 0 0 1 4-4c.8-2 2.3-3 4-3s3.2 1 4 3a4 4 0 0 1 4 4v8H4v-8Z" />
          <path d="M8 11v2m4-3v3m4-3v2" />
        }
        @case ("stove") {
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <circle cx="8" cy="9" r="2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M7 15h10v4H7z" />
        }
        @case ("microwave") {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <rect x="5" y="7" width="11" height="10" rx="1" />
          <path d="M18 8v1m0 3v1m0 3v.1" />
        }
        @case ("airfryer") {
          <path d="M6 4h12l2 5v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9l2-5Z" />
          <path d="M4 9h16M9 13h6m-5 4h4" />
        }
        @case ("cooker") {
          <path d="M5 9h14l-1 11H6L5 9Zm-2 0h18M9 5h6M10 3v2m4-2v2" />
        }
        @case ("fridge") {
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M5 11h14M9 7v2m0 5v3" />
        }
        @case ("blender") {
          <path d="M8 3h8l-1 10H9L8 3Zm1 10h6l2 4H7l2-4Zm-2 4h10v4H7z" />
          <path d="M10 6h4" />
        }
        @case ("oven") {
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M4 8h16m-12-3v.1m4-.1v.1m4-.1v.1M7 11h10v7H7z" />
        }
        @case ("grill") {
          <path d="M4 8h16l-2 6H6L4 8Zm2 6-2 7m12-7 2 7M8 4v2m4-3v3m4-2v2" />
        }
        @case ("check") {
          <path d="m5 12 4 4L19 6" />
        }
        @case ("close") {
          <path d="m6 6 12 12M18 6 6 18" />
        }
        @case ("plus") {
          <path d="M12 5v14m-7-7h14" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        width: 1.2em;
        height: 1.2em;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
      }

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
}
