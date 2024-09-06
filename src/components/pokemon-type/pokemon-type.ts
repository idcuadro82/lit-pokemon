import { html, LitElement } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import pokemonTypeStyles from './pokemon-type.styles';

@customElement('lit-pokemon-type')
export class PokemonType extends LitElement {
  static styles = pokemonTypeStyles;

  @property({ type: String })
  type?: string;

  render() {
    const classes = {
      'pokemon-type': true,
      [this.type]: true,
    };
    return html`<div class=${classMap(classes)}>${this.type}</div>`;
  }
}
