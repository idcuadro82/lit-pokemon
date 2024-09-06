import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Pokemon } from '../../../models/Pokemon';
import { API } from '../../../config/constants';
import pokemonEvolutionFormStyles from './pokemon-evolution-form.styles';

@customElement('lit-pokemon-evolution-form')
export class PokemonEvolutionsForm extends LitElement {
  static styles = pokemonEvolutionFormStyles;

  @property({ type: Object })
  evolution?: Pokemon;

  inputHandler(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const input = e.target as HTMLInputElement;
    const property = input.getAttribute('name');
    this.evolution = { ...this.evolution, [property]: input.value };
  }

  formSubmit(e: HTMLFormElement) {
    e.preventDefault();
    console.log(this.evolution);
  }

  render() {
    return html`
      <form class="pokemon-evolution-form" @submit=${this.formSubmit}>
        <img
          class="pokemon-evolution-image"
          src=${`${API.POKEMON_IMAGE_REPO_URL}/${this.evolution.image}`}
          alt=${this.evolution.name}
        />
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            .value=${this.evolution.name}
            @input=${this.inputHandler}
          />
        </div>
      </form>
    `;
  }
}
