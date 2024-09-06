import { API } from '../config/constants';
import { Pokemon } from '../models/Pokemon';

const pokemonWithMultiplesEvolutionLines = ['Eevee'];

export class PokemonService {
  private static instance: PokemonService;

  public static getInstance(): PokemonService {
    this.instance = PokemonService.instance || new PokemonService();
    return this.instance;
  }

  getAll = async (): Promise<Pokemon[]> => {
    const response = await fetch(API.POKEMON_URL);

    const pokemons = (await response.json()) as Pokemon[];

    return pokemons.flatMap((pokemon) => {
      return [
        pokemon,
        ...pokemon.evolutions.map((evolution, index) => ({
          name: evolution.name,
          type: evolution.type,
          image: evolution.image,
          evolutions: pokemonWithMultiplesEvolutionLines.includes(pokemon.name)
            ? []
            : pokemon.evolutions.slice(index + 1),
        })),
      ] as Pokemon[];
    });
  };
}

export default PokemonService.getInstance();
