import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from "redux";
import thunkMiddleware from "redux-thunk";
import PokemonReducer from "./Pokemon";

const mainReducer = combineReducers({
  pokemon: PokemonReducer,
});

const store = createStore(mainReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
