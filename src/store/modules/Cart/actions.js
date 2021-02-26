import { ADD_PRODUCT, RM_PRODUCT } from "./actionsType";

export const addFromCart = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const removeFromCart = (product) => ({
  type: RM_PRODUCT,
  product,
});
