import { createStore, combineReducers } from "redux";
import {productReducer } from "./Product/reducer";
import {reducer} from "./Login/reducer"

const rootReducer = combineReducers({
    data: productReducer,
    reducer: reducer
})

export const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

