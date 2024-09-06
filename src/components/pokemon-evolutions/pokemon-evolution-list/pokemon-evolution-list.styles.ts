import { css } from 'lit';

export const pokemonEvolutionListStyles = css`
  :host {
    display: flex;
    justify-content: center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .pokemon-evolution-list {
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
    font-weight: bold;
  }
`;

export default pokemonEvolutionListStyles;
