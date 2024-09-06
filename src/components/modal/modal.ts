import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import modalStyles from './modal.styles';
import { classMap } from 'lit-html/directives/class-map.js';

@customElement('lit-modal')
export class Modal extends LitElement {
  @property({ type: Boolean, reflect: true })
  opened?: boolean;

  static styles = modalStyles;

  render() {
    const classes = {
      'modal-wrapper': true,
      'modal-opened': this.opened,
    };

    return html`
      <div class=${classMap(classes)}>
        <div class="modal-container">
          <div class="modal-content">
            <slot name="modal-content"></slot>
            <button class="close-modal-button" @click=${this.closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    `;
  }

  closeModal = () => {
    this.dispatchEvent(new CustomEvent('close-modal'));
  };
}
