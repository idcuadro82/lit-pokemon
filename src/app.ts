import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import appStyles from './app.styles';

@customElement('lit-app')
export class App extends LitElement {
  static styles = appStyles;

  render() {
    return html`<lit-main-layout></lit-main-layout>`;
  }
}
