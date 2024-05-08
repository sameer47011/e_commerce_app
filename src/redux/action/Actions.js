import { ADD_TO_WISHLIST, ADD_To_CART, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionType";

export const addItemToCart = data =>({
    type:ADD_To_CART,
    payload:data
});

export const removeFromCart = index =>({
    type:REMOVE_FROM_CART,
    payload:index
});

export const addToWishlist =data=>({
    type:ADD_TO_WISHLIST,
    payload:data
});

export const removeFromWishlist = index =>({
    type:REMOVE_FROM_WISHLIST,
    payload:index
});