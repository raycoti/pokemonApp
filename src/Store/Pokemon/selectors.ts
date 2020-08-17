import { Pokemon } from "./types.d";

export const getPokemonState = ( state: any ): Pokemon.Reducer => {
  return state.pokemon;
}

export const getRandomPokemon = (state: any) => {
  const { random } = getPokemonState(state);
  return random;
}

export const getMainPokemonList = (state: any) => {
  const { main } = getPokemonState(state);
  return Object.keys(main).map(id=>main[id]);
}

export const getPokemonErrors = (state: any) => {
  const { errors } = getPokemonState(state);
  return errors;
}
