import { createStore } from "redux"
import Reducers from "../reducers/Reducers";
import { combineReducers } from "redux";
import { Reducers2 } from "../reducers/Reducers2";
const rootReducer=combineReducers({Reducers,Reducers2})

const Store = createStore(rootReducer);
export default Store