import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Pokemon } from '../../../models/Pokemon';
import pokemonObserver from '../../../observers/pokemon.observer';
import pokemonEvolutionListStyles from './pokemon-evolution-list.styles';

@customElement('lit-pokemon-evolution-list')
export class PokemonEvolutionsList extends LitElement {
  static styles = pokemonEvolutionListStyles;

  @property({ type: Array })
  evolutions?: Pokemon[] = [];

  render() {
    return html`
      <div class="pokemon-evolution-list">
        ${this.evolutions.map(
          (pokemon) => html`
            <div
              class="pokemon-evolution-row"
              @click=${() => this.handlerEvolutionClick(pokemon)}
            >
              <div class="pokemon-evolution-name">${pokemon.name}</div>
              <div>
                <lit-pokemon-card .pokemon=${pokemon} />
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  handlerEvolutionClick = (pokemon: Pokemon): void => {
    pokemonObserver.editingEvolution = pokemon;
  };
}
