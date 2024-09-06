import { API } from '../config/constants';
import { Pokemon } from '../models/Pokemon';

export class PokemonService {
  private static instance: PokemonService;

  public static getInstance(): PokemonService {
    this.instance = PokemonService.instance || new PokemonService();
    return this.instance;
  }

  getAll = (): Promise<Pokemon[]> => {
    return fetch(API.POKEMON_URL)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };
}

export default PokemonService.getInstance();
