import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import pokemonCardStyles from './pokemon-card.styles';
import { Pokemon } from 'models/Pokemon';

@customElement('lit-pokemon-card')
export class PokemonCard extends LitElement {
  static styles = pokemonCardStyles;

  @property({ type: Object })
  pokemon?: Pokemon;

  render() {
    return html`<div class="pokemon-card">
      <img
        src=${`https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x/${this.pokemon.image}`}
        alt=${this.pokemon.name}
      />
    </div>`;
  }
}
