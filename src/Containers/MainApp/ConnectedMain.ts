import { connect } from "react-redux";
import {
  actions as pokemonActions
} from "Store/Pokemon";
import MainApp from "./Main";

const mdtp = (dispatch: any) => ({
  onLoad(){
    dispatch(pokemonActions.fetchAndSetMainPokemon());
  },
});

export default connect(null, mdtp)(MainApp);
