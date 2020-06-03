import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/home/home.module#HomeModule', pathMatch: 'full'},
  {path: 'pokedex', loadChildren: './modules/pokedex/pokedex.module#PokedexModule'},
  {path: 'search', loadChildren: './modules/search/search.module#SearchModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
