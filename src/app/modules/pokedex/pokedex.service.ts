import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './models/pokemon';
import { IAbility } from './models/ability';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {
  }

  getPokemonList(pokemonList: IPokemon[] = [], page: number = 0, perPage: number = 30): IPokemon[] {
    const promise: any = this.http.get(this.url + '?offset=' + page * perPage + '&limit=' + perPage).toPromise();
    promise.then(response => {
      const results = response.results;
      results.forEach(initialData => {
        const pokemonPromise = this.http.get(initialData.url).toPromise();
        pokemonPromise.then((allPokeData: any) => {
          const pokemon: IPokemon = {
            name: allPokeData.name,
            id: allPokeData.id,
            picture: allPokeData.sprites.front_default
          };

          pokemonList.push(pokemon);
        });
      });
    });
    return pokemonList;
  }

  getPokemon(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  getAbility(abilityUrl): Observable<IAbility> {
    return this.http.get(abilityUrl) as Observable<IAbility>;
  }
}
