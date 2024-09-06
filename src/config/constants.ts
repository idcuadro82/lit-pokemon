export const API = {
  POKEMON_URL: `${process.env.SERVER_HOST}/pokemon`,
  POKEMON_IMAGE_REPO_URL:
    'https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/1x',
};

export enum APP_EVENTS {
  POKEMON_SELECTED = 'POKEMON_SELECTED',
  EVOLUTION_SELECTED = 'EVOLUTION_SELECTED',
}
