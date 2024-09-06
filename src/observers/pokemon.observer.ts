import { Pokemon } from '../models/Pokemon';
import { BaseObserver } from './base.observer';

class PokemonObserver extends BaseObserver<PokemonObserver> {
  private static instance: PokemonObserver;

  private _pokemon: Pokemon;

  public static getInstance(): PokemonObserver {
    this.instance = PokemonObserver.instance || new PokemonObserver();
    return this.instance;
  }

  get pokemon(): Pokemon {
    return this._pokemon;
  }

  set pokemon(pokemon: Pokemon) {
    this._pokemon = pokemon;
    this.notify(this._pokemon);
  }
}

export default PokemonObserver.getInstance();
