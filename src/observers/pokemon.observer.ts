import { Pokemon } from '../models/Pokemon';
import { BaseObserver } from './base.observer';
import { APP_EVENTS } from '../config/constants';

class PokemonObserver extends BaseObserver<PokemonObserver> {
  private static instance: PokemonObserver;

  private _pokemon: Pokemon;
  private _editingEvolution: Pokemon;

  public static getInstance(): PokemonObserver {
    this.instance = PokemonObserver.instance || new PokemonObserver();
    return this.instance;
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  get editingEvolution(): Pokemon {
    return this._editingEvolution;
  }

  set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
    this._editingEvolution = undefined;
    this.notify(this._pokemon, APP_EVENTS.POKEMON_SELECTED);
  }

  set editingEvolution(pokemon: Pokemon) {
    this._editingEvolution = pokemon;
    this.notify(this._editingEvolution, APP_EVENTS.EVOLUTION_SELECTED);
  }
}

export default PokemonObserver.getInstance();
