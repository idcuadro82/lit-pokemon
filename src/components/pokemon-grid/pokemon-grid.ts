import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import pokemonObserver from '../../observers/pokemon.observer';
import pokemonService from '../../services/pokemon.service';
import { Pokemon } from '../../models/Pokemon';

import pokemonGridStyles from './pokemon-grid.styles';

@customElement('lit-pokemon-grid')
export class PokemonGrid extends LitElement {
  pokemons: Pokemon[] = [];

  static styles = pokemonGridStyles;

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    this.pokemons = await pokemonService.getAll();
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="pokemon-grid">
        ${this.pokemons.map(
          (pokemon) =>
            html`
              <lit-pokemon-card
                .pokemon=${pokemon}
                @click=${() => this.handlerPokemonClick(pokemon)}
              />
            `
        )}
      </div>
    `;
  }

  handlerPokemonClick = (pokemon: Pokemon): void => {
    pokemonObserver.pokemon = pokemon;
  };
}
