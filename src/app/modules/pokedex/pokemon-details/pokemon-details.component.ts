import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from '../models/pokemon';
import { PokedexService } from '../pokedex.service';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: IPokemon = {};

  constructor(private pokedexService: PokedexService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pokedexService.getPokemon(id).pipe(skipWhile(r => !r)).subscribe(response => {
      this.pokemon = {
        name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
        id: response.id,
        picture: response.sprites.front_default,
        abilities: response.abilities,
        types: response.types,
        order: response.order,
        stats: response.stats
      };

      this.pokemon.abilities.forEach(x => {
        this.pokedexService.getAbility(x.ability.url).pipe(skipWhile(r => !r)).subscribe(response => {
          x.ability.description = response.effect_entries[0].short_effect;
        });
      });

      console.log(this.pokemon);
    });
  }


}
