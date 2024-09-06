import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import pokemonObserver from './observers/pokemon.observer';
import { Pokemon } from './models/Pokemon';

import appStyles from './app.styles';
import { APP_EVENTS } from './config/constants';

@customElement('lit-app')
export class App extends LitElement {
  static styles = appStyles;
  selectedPokemon: Pokemon;

  constructor() {
    super();
    pokemonObserver.addSubscriber(this.selectPokemon);
  }

  render() {
    const evolutions = this.selectedPokemon?.evolutions;
    const showEvolutions = Array.isArray(evolutions) && evolutions.length;
    return html`
      <lit-main-layout>
        <div slot="content">
          ${showEvolutions
            ? html`<lit-pokemon-evolutions .evolutions=${evolutions} /> `
            : html`<lit-pokemon-grid />`}
        </div>
      </lit-main-layout>
    `;
  }

  selectPokemon = (pokemon: Pokemon, event: APP_EVENTS): void => {
    if (event === APP_EVENTS.POKEMON_SELECTED) {
      this.selectedPokemon = pokemon;
      this.requestUpdate();
    }
  };

  disconnectedCallback() {
    pokemonObserver.removeSubscriber(this.selectPokemon);
    super.disconnectedCallback();
  }
}
