import { css } from 'lit';

export const pokemonGridStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .back-button {
    color: white;
    border: 0;
    padding: 5px 20px;
    font-size: 20px;
    border-radius: 5;
    background-color: var(--red-pokemon);
    cursor: pointer;
  }
`;

export default pokemonGridStyles;
