import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 3rem;
  background-color: #5e35b1;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Cart = styled.div`
  position: relative;
  margin-right: 4rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 4rem;
  transition: 0.2s;

  &:hover {
    background-color: #512da8;
  }
`;

const NumberProductsCart = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  font-size: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  font-family: sans-serif;
`;

export { HeaderContainer, Cart, NumberProductsCart };
