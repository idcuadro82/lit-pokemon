import { css } from 'lit';

export const pokemonGridStyles = css`
  :host {
    --pokemon-card-size: 175px;
  }

  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .pokemon-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--pokemon-card-size), 1fr)
    );
    gap: 20px;
  }
`;

export default pokemonGridStyles;
