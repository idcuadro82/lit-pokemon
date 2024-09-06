import { css } from 'lit';

export const pokemonEvolutionStyles = css`
  :host {
    display: flex;
    justify-content: center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .pokemon-evolution {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 600px;
  }

  .back-button {
    color: white;
    border: 0;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 5px;
    background-color: var(--red-pokemon);
    cursor: pointer;
  }

  .pokemon-evolution-action {
    display: flex;
    justify-content: center;
  }
`;

export default pokemonEvolutionStyles;
