import { ADD_To_CART, REMOVE_FROM_CART } from "../ActionType";

const reducers = (initialState = [], actions) => {
    switch (actions) {
        case ADD_To_CART:
            return [...initialState, ...actions.payload];
        case REMOVE_FROM_CART:
            const deletedArray = initialState.filter((item, index) => {
                return index !== actions.payloadd;
            });
            return deletedArray;
            default :
            return initialState
    }
}
export default reducers