
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import state from "./state";
import reducers from "./reducers/index";

let store = createStore(reducers, state, applyMiddleware(thunk));

console.log(store.getState())
export default store;