import { css } from 'lit';

export const pokemonTypeStyles = css`
  :host {
    display: block;
    font-family: Arial, sans-serif;
  }

  .pokemon-type {
    padding: 5px;
    color: white;
    min-width: 50px;
    text-align: center;
  }

  .Electric {
    background-color: #fac000;
  }

  .Fairy {
    background-color: #ef70ef;
  }

  .Fighting {
    background-color: #ff8000;
  }

  .Fire {
    background-color: #e62829;
  }

  .Flying {
    background-color: #81b9ef;
  }

  .Ghost {
    background-color: #704170;
  }

  .Grass {
    background-color: #3fa129;
  }

  .Ground {
    background-color: #915121;
  }

  .Normal {
    background-color: #9fa19f;
  }

  .Psychic {
    background-color: #ef4179;
  }

  .Poison {
    background-color: #9141cb;
  }

  .Rock {
    background-color: #afa981;
  }

  .Water {
    background-color: #2980ef;
  }
`;

export default pokemonTypeStyles;
