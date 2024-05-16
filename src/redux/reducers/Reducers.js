import { ADD_TO_WISHLIST, ADD_To_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionType";
const Reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_To_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const deletedArray1 = state.filter((item, index) => {
                return index !== action.payload;
            });
            return deletedArray1;
        default:
            return state
    }
}
export default Reducers