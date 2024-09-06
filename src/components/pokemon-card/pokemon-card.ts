import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Pokemon } from '../../models/Pokemon';
import { API } from '../../config/constants';
import pokemonCardStyles from './pokemon-card.styles';

@customElement('lit-pokemon-card')
export class PokemonCard extends LitElement {
  static styles = pokemonCardStyles;

  @property({ type: Object })
  pokemon?: Pokemon;

  render() {
    return html`<div class="pokemon-card" title=${this.pokemon?.name}>
      <img
        src=${`${API.POKEMON_IMAGE_REPO_URL}/${this.pokemon.image}`}
        alt=${this.pokemon.name}
      />
      <span class="pokemon-card-name">${this.pokemon?.name}</span>
      <div class="pokemon-card-types">
        ${this.pokemon.type
          .split('/')
          .map(
            (type) =>
              html`<lit-pokemon-type class="pokemon-type" .type=${type} />`
          )}
      </div>
    </div>`;
  }
}
