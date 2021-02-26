import React from "react";
import CartStore from "../../components/CartStore";
import Header from "../../components/Header";
import Product from "../../components/Product";

const ListProducts = () => {
  const [showCartStore, setShowCartStore] = React.useState(false);

  return (
    <>
      <Header setShowCartStore={setShowCartStore} />
      <Product />
      {showCartStore && <CartStore setShowCartStore={setShowCartStore} />}
    </>
  );
};

export default ListProducts;
