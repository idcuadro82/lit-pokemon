import { css } from 'lit';

export const mainLayoutStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: var(--red-pokemon);
    padding: 16px;
    font-size: 24px;
    text-align: center;
  }

  .content {
    padding: 20px;
    background-color: white;
    min-height: 200px;
  }

  .pokedex-logo {
    width: 300px;
    height: auto;
  }
`;

export default mainLayoutStyles;
