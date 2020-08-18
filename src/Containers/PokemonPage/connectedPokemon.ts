import { connect } from "react-redux";
import PokemonPage from "./PokemonPage";
import {
  actions as pokemonActions,
  selectors as pokemonSelectors,
} from "Store/Pokemon";

const mstp = (state: any) => ({
  randomPokemon: pokemonSelectors.getRandomPokemon(state),
  mainPokemon: pokemonSelectors.getMainPokemonList(state),
});

const mdtp = (dispatch: any) => ({
  fetchRandom(){
    dispatch(pokemonActions.fetchRandomPokemon());
  }
});

export default connect(mstp, mdtp)(PokemonPage);
