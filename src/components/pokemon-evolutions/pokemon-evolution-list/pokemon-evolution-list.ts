import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Pokemon } from '../../../models/Pokemon';
import pokemonEvolutionListStyles from './pokemon-evolution-list.styles';

@customElement('lit-pokemon-evolution-list')
export class PokemonEvolutionsList extends LitElement {
  static styles = pokemonEvolutionListStyles;

  @property({ type: Array })
  pokemons?: Pokemon[] = [];

  render() {
    return html`<div class="pokemon-evolution-list">
      ${this.pokemons.map(
        (pokemon) => html`<div class="pokemon-evolution-row">
          <div class="pokemon-evolution-name">${pokemon.name}</div>
          <div>
            <lit-pokemon-card .pokemon=${pokemon}>
          </div>
        </div>`
      )}
    </div> `;
  }
}
