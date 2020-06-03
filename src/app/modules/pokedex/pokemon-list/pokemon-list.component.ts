import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemon[] = [];

  page = 0;
  breakpoint = 1;

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.getPokemonList();
    this.setBreakPoint();
  }

  setBreakPoint(event = null) {
    let innerWidth = window.innerWidth;
    if (event) {
      innerWidth = event.target.innerWidth;
    }
    this.breakpoint = (innerWidth <= 1199) ? 2 : 3;
    this.breakpoint = (innerWidth <= 768) ? 1 : this.breakpoint;
  }

  onResize(event) {
    this.setBreakPoint(event);
  }

  getPokemonList(): void {
    this.pokemonList = this.pokedexService.getPokemonList();
  }

  loadMore(): void {
    this.page++;
    this.pokemonList = this.pokedexService.getPokemonList(this.pokemonList, this.page);
  }
}
