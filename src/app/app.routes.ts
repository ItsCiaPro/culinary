import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PantryComponent } from "./pantry/pantry.component";
import { PostComponent } from "./post/post.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { VideosComponent } from "./videos/videos.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "receitas", component: RecipesComponent },
  { path: "receita/:id", component: RecipeDetailComponent },
  { path: "despensa", component: PantryComponent },
  { path: "compras", component: ShoppingComponent },
  { path: "postar", component: PostComponent },
  { path: "perfil", component: ProfileComponent },
  { path: "entrar", component: LoginComponent },
  { path: "videos", component: VideosComponent },
  { path: "**", redirectTo: "" },
];
