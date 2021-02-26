import { addFromCart, removeFromCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const productsCartStorage =
    JSON.parse(localStorage.getItem("cart-kenzie-shop")) || [];

  localStorage.setItem(
    "cart-kenzie-shop",
    JSON.stringify([...productsCartStorage, product])
  );
  dispatch(addFromCart(product));
};

export const removeCartThunk = (product) => (dispatch) => {
  const productsCartStorage =
    JSON.parse(localStorage.getItem("cart-kenzie-shop")) || [];

  const filterProduct = productsCartStorage.filter(
    ({ id }) => id !== product.id
  );

  localStorage.setItem("cart-kenzie-shop", JSON.stringify(filterProduct));

  dispatch(removeFromCart(product));
};
