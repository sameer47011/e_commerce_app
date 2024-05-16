import { ADD_TO_WISHLIST, ADD_To_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionType";

export const Reducers2 = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
    return [...state, action.payload];
case REMOVE_FROM_WISHLIST:
    const deletedArray2 = state.filter((item, index) => {
        return index !== action.payload;
    });
    return deletedArray2;
        default:
            return state
    }

}