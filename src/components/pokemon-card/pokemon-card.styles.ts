import { css } from 'lit';

export const pokemonCardStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: var(--pokemon-card-size);
    height: var(--pokemon-card-size);
  }

  .pokemon-card {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 18px 1px rgba(161, 159, 161, 1);
    background-color: #f0f0f0;
  }

  .pokemon-card-types {
    display: flex;
    flex-direction: row;
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
