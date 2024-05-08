import { createStore } from "redux"
import reducers from "../reducers/Reducers"

const Store = createStore(reducers);
export default Store