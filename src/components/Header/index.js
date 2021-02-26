import React from "react";
import { HeaderContainer, Cart, NumberProductsCart } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = ({ setShowCartStore }) => {
  const product = useSelector((state) => state.productCart);

  return (
    <HeaderContainer>
      <Cart onClick={() => setShowCartStore(true)}>
        {product.length !== 0 && (
          <NumberProductsCart>{product.length}</NumberProductsCart>
        )}
        <AiOutlineShoppingCart />
      </Cart>
    </HeaderContainer>
  );
};

export default Header;
