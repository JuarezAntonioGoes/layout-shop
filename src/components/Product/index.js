import React from "react";
import { useDispatch, useSelector } from "react-redux";
import productsJson from "../../json/products.json";

import {
  addCartThunk,
  removeCartThunk,
} from "../../store/modules/Cart/cartThunk";

import {
  ImageProduct,
  ProductItem,
  ProductContainer,
  ButtonAddCart,
} from "./style";

const Product = ({ setShowCartStore }) => {
  const [products] = React.useState([...productsJson]);

  const result = useSelector((state) => state.productCart);
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addCartThunk(product));
  };

  const handleRemoveCart = (product) => {
    dispatch(removeCartThunk(product));
  };

  return (
    <>
      <ProductContainer>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ImageProduct src={product.urlImage} alt="foto produto" />
            <h2>{product.nome}</h2>
            <p>R$ {product.preco.toFixed(2).replace(".", ",")}</p>
            <p>{product.descricao}</p>

            {result.some(({ id }) => id === product.id) ? (
              <ButtonAddCart
                addCart={true}
                onClick={() => handleRemoveCart(product)}
              >
                Retirar produto do carrinho
              </ButtonAddCart>
            ) : (
              <ButtonAddCart
                onClick={() => handleAddCart(product)}
                addCart={false}
              >
                Adicionar ao carrinho
              </ButtonAddCart>
            )}
          </ProductItem>
        ))}
      </ProductContainer>
    </>
  );
};

export default Product;
