import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartThunk } from "../../store/modules/Cart/cartThunk";
import { AsideCart, PriceTotal, Product } from "./style";

import { AiOutlineArrowRight } from "react-icons/ai";

const CartStore = ({ setShowCartStore }) => {
  const [totalPrice, setTotalPrice] = React.useState(0);

  const result = useSelector((state) => state.productCart);
  const total = useSelector((state) => state.productCart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const priceSome = total.reduce((acc, att) => acc + att.preco, 0);
    setTotalPrice(priceSome);
  }, [total]);

  const handleRemoveCart = (product) => {
    dispatch(removeCartThunk(product));
  };

  return (
    <>
      <AsideCart>
        <header onClick={() => setShowCartStore(false)}>
          <AiOutlineArrowRight />
        </header>

        {result.length ? (
          <div>
            <PriceTotal>
              Total: <span>{totalPrice.toFixed(2).replace(".", ",")}</span>
            </PriceTotal>

            {result.map((product) => (
              <Product key={product.id}>
                <img src={product.urlImage} alt="foto produto" />
                <div>
                  <h2>{product.nome}</h2>
                  <p>{product.preco}</p>
                  <p>{product.descricao}</p>
                  <button onClick={() => handleRemoveCart(product)}>
                    Remover do carrinho
                  </button>
                </div>
              </Product>
            ))}
          </div>
        ) : (
          <PriceTotal>Nenhum produto adicionado no carrinho...</PriceTotal>
        )}
      </AsideCart>
    </>
  );
};

export default CartStore;
