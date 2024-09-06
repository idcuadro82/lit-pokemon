import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import pokemonObserver from '../../observers/pokemon.observer';
import { Pokemon } from '../../models/Pokemon';
import { APP_EVENTS } from '../../config/constants';

import pokemonEvolutionsStyles from './pokemon-evolutions.styles';

@customElement('lit-pokemon-evolutions')
export class PokemonEvolutions extends LitElement {
  static styles = pokemonEvolutionsStyles;
  editingEvolution: Pokemon;

  @property({ type: Array })
  evolutions?: Pokemon[] = [];

  constructor() {
    super();
    pokemonObserver.addSubscriber(this.selectEvolution);
  }

  render() {
    return html`
      <div class="pokemon-evolution">
        <div class="pokemon-evolution-list">
          ${this.editingEvolution
            ? html`
                <lit-pokemon-evolution-form
                  .evolution=${this.editingEvolution}
                />
              `
            : html`
                <lit-pokemon-evolution-list .evolutions=${this.evolutions} />
              `}
        </div>
        <div class="pokemon-evolution-action">
          <button class="back-button" @click=${() => this.back()}>Back</button>
        </div>
      </div>
    `;
  }

  selectEvolution = (pokemon: Pokemon, event: APP_EVENTS) => {
    if (event === APP_EVENTS.EVOLUTION_SELECTED) {
      this.editingEvolution = pokemon;
      this.requestUpdate();
    }
  };

  back = (): void => {
    pokemonObserver.pokemon = undefined;
  };
}
