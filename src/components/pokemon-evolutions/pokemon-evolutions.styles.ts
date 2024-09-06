import { css } from 'lit';

export const pokemonGridStyles = css`
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

  .pokemon-evolution-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    margin-bottom: 20px;
  }

  .pokemon-evolution-name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    height: 100%;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: var(--component-shadow);
    background-color: var(--pokemon-card-color);
    flex-grow: 1;
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

export default pokemonGridStyles;
