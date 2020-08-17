import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from "redux";
import thunkMiddleware from "redux-thunk";

const mainReducer = combineReducers({

});

const store = createStore(mainReducer, compose(applyMiddleware(thunkMiddleware)));

export default store;
