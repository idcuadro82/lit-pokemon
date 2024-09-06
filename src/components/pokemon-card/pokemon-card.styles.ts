import { css } from 'lit';

export const pokemonCardStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: var(--pokemon-card-size);
    height: var(--pokemon-card-size);
    background-color: #f9f9f9;
    box-shadow: 0px 0px 18px 1px rgba(161, 159, 161, 1);
    border-radius: 10px;
    cursor: pointer;
  }

  .pokemon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: 80%;
    height: auto;
  }
`;

export default pokemonCardStyles;
