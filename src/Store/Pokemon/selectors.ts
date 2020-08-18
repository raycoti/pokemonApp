import { Pokemon } from "./types.d";

export const getPokemonState = ( state: any ): Pokemon.Reducer => {
  return state.pokemon;
}

export const getRandomPokemon = (state: any) => {
  const { random } = getPokemonState(state);
  if(random){
    return transformPokeData(random)
  } else{
    return null;
  };
}

export const getMainPokemonList = (state: any) => {
  const { main } = getPokemonState(state);
  return Object.keys(main).map(id=>{
    const info = main[id] as Pokemon.attributes;
    return transformPokeData(info)
  });
}

export const getPokemonErrors = (state: any) => {
  const { errors } = getPokemonState(state);
  return errors;
}


//Utils
const transformPokeData = (info: Pokemon.attributes) => ({
  id: info.id,
  height: info.height,
  weight: info.weight,
  baseExperience: info.baseExperience,
  name: info.name,
  sprite: info.mainSprite,
})
