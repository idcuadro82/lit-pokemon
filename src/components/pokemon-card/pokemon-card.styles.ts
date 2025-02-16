import { css } from 'lit';

export const pokemonCardStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: var(--pokemon-card-size);
    height: auto;
  }

  .pokemon-card {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5px 0px;
    border-radius: 10px;
    box-shadow: var(--component-shadow);
    background-color: var(--pokemon-card-color);
  }

  .pokemon-card-types {
    display: flex;
    flex-direction: row;
  }

  .pokemon-card-name {
    margin: 4px 0px;
  }

  .pokemon-type {
    margin-right: 10px;
  }

  .pokemon-type:last-child {
    margin-right: 0;
  }

  img {
    width: 80%;
    height: auto;
  }
`;

export default pokemonCardStyles;
