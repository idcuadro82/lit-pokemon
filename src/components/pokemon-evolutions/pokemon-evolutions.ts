import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import pokemonObserver from '../../observers/pokemon.observer';
import { Pokemon } from '../../models/Pokemon';

import pokemonEvolutionsStyles from './pokemon-evolutions.styles';

@customElement('lit-pokemon-evolutions')
export class PokemonEvolutions extends LitElement {
  static styles = pokemonEvolutionsStyles;

  @property({ type: Array })
  pokemons?: Pokemon[] = [];

  render() {
    return html`
      <div class="pokemon-evolution">
        <div class="pokemon-evolution-list">
          <lit-pokemon-evolution-list .pokemons=${this.pokemons} />
        </div>
        <div class="pokemon-evolution-action">
          <button class="back-button" @click=${() => this.back()}>Back</button>
        </div>
      </div>
    `;
  }

  back = (): void => {
    pokemonObserver.pokemon = undefined;
  };
}
