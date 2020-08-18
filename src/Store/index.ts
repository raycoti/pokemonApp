import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from "redux";
import { createLogger } from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import PokemonReducer from "./Pokemon";

const mainReducer = combineReducers({
  pokemon: PokemonReducer,
});
let composeEnhancers = compose;

if((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}


const store = createStore(
  mainReducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      createLogger({ collapsed: true })
    )));

export default store;
