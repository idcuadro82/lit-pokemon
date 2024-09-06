import { css } from 'lit';

export const pokemonEvolutionFormStyles = css`
  :host {
    display: flex;
    justify-content: center;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-bottom: 10px;
  }

  .pokemon-evolution-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
  }

  .pokemon-evolution-image {
    width: 200px;
    height: auto;
  }

  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
  }

  .form-group > label {
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
  }

  .form-group > input {
    flex: 1;
    height: 34px;
    font-size: 20px;
    padding: 5px 15px;
    border-radius: 5px;
  }
`;

export default pokemonEvolutionFormStyles;
