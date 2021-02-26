import { ADD_PRODUCT, RM_PRODUCT } from "./actionsType";

const productsCartStorage =
  JSON.parse(localStorage.getItem("cart-kenzie-shop")) || [];

export const cartReducer = (state = productsCartStorage, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];

    case RM_PRODUCT:
      const { id } = action.product;
      return state.filter((product) => product.id !== id);

    default:
      return state;
  }
};
