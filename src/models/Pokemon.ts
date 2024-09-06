export type Pokemon = {
  name: string;
  type: string;
  image: string;
  evolutions: Omit<Pokemon, 'evolutions'>[];
};
