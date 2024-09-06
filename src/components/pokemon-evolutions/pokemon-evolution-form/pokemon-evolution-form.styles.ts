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
    margin-bottom: 15px;
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

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px !important;
    user-select: none;
  }

  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  .checkbox-container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .checkbox-container input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkbox-container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default pokemonEvolutionFormStyles;
