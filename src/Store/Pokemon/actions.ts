import { action, ActionType } from "typesafe-actions";
import * as actionTypes from "./actionTypes";
import { ThunkDispatch } from "redux-thunk";
import PokemonSdk, { PokemonSdkClient } from "Sdks/PokemonSdk"; 

interface FormattedPokemon {
  baseExperience: number;
  height: number;
  weight: number;
  id: number;
  mainSprite: string | null;
  name: string;
  abilities: any;
  types: any;
  stats: any;
}

interface MainPayload {
  [key: string]: FormattedPokemon
}

//Action Creators

const addMainPokemon = (main: MainPayload) => {
  return action(actionTypes.addMain, main);
}

const setRandomPokemon = (pokemon: FormattedPokemon) => {
  return action(actionTypes.setRandom, pokemon)
}

const addError = (error: any) => {
  return action(actionTypes.addError, error);
}

const removeError = (errorId: string) => {
  return action(actionTypes.removeError, errorId);
}

const clearErrors = () => {
  return action(actionTypes.clearErrors);
}

type SetMainPokemon = ActionType<typeof addMainPokemon>;
type SetRandomPokemon = ActionType<typeof setRandomPokemon>;
type AddError = ActionType<typeof addError>;
type RemoveError = ActionType<typeof removeError>;
type ClearErrors = ActionType<typeof clearErrors>;

export type PokemonActions = SetMainPokemon
                           | SetRandomPokemon
                           | AddError
                           | RemoveError
                           | ClearErrors;

//Thunks

const fetchandSetPokemonById = (id: string, random?: boolean) => {
  return async (dispatch: ThunkDispatch<any, {}, PokemonActions>) => {
    const pokemonPromise = PokemonSdk.pokemon.getById(id);
    let pokemon: FormattedPokemon;
    try{
      const pokemonResponse = await pokemonPromise;
      pokemon = formatPokemon(pokemonResponse)
    } catch(err){
      dispatch(addError({id: err}));
      return;
    }
    if(random){
      dispatch(setRandomPokemon(pokemon));
    } else{
      dispatch(addMainPokemon({id: pokemon}))
    }
  }
}

const fetchAndSetMainPokemon = () => {
  return (dispatch: ThunkDispatch<any, {}, PokemonActions>) => {
    dispatch(fetchandSetPokemonById("7"))
    dispatch(fetchandSetPokemonById("4"))
    dispatch(fetchandSetPokemonById("1"))
  }
}

const fetchRandomPokemon = () => {
  return (dispatch: ThunkDispatch<any, {}, PokemonActions>) => {
    const randomId = randomInteger(1, 1048).toString();
    dispatch(fetchandSetPokemonById(randomId, true));
  }
}


//Utils

const formatPokemon = (response: any): FormattedPokemon => ({
  id: response.id,
  abilities: response.abilities,
  baseExperience: response.base_experience,
  height: response.height,
  name: response.name,
  weight: response.weight,
  stats: response.stats,
  types: response.types,
  mainSprite: response.sprites.front_default,
})

const randomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  fetchAndSetMainPokemon,
  fetchRandomPokemon,
};