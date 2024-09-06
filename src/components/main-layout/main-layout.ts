import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import PokedexImage from '../../assets/logo-pokedex.png';
import mainLayoutStyles from './main-layout.styles';

@customElement('lit-main-layout')
export class MainLayout extends LitElement {
  static styles = mainLayoutStyles;

  render() {
    return html`
      <header>
        <img class="pokedex-logo" src=${PokedexImage} alt="pokedex" />
      </header>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}
