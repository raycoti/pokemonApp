import actions, { PokemonActions} from "./actions";
import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import { Pokemon } from "./types";


const initialState: Pokemon.Reducer = {
  main: {},
  random: null,
  errors: [],
}

const PokemonReducer = (
  state: Pokemon.Reducer = initialState,
  action: PokemonActions,
) => {
  switch(action.type){
    case actionTypes.addMain:
      return {
        ...state,
        main: {
          ...state.main,
          ...action.payload,
        }
      }
    case actionTypes.setRandom:
      return {
        ...state,
        random: action.payload
      }
    case actionTypes.addError:
      return {
        ...state,
        errors: [action.payload, ...state.errors]
      }
    case actionTypes.removeError:
      return {
        ...state,
        errors: state.errors.filter(err => err.id !== action.payload)
      }
    case actionTypes.clearErrors:
      return {
        ...state,
        errors: [],
      }
    default:
      return state;
  }
}

export default PokemonReducer;

export {
  actions,
  selectors,
}