import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  imports: [
    PokedexRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PokedexModule { }
