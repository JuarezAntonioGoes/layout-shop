import styled, { keyframes } from "styled-components";

const AnimationProduct = keyframes`
  from{
    opacity: 0;
    transform: translatex(-20px);
  }
  to{
    opacity: initial;
    transform: initial;
  }
`;

const AnimationAside = keyframes`
  from{
    transform: translatex(100%);
  }
  to{
    transform: initial;
  }
`;

const AsideCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30rem;
  background-color: #fff;
  box-shadow: -1px 0 4px #000;
  animation: ${AnimationAside} 0.8s forwards;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0.5rem;
    background-color: #512da8;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #673ab7;
    }
  }
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  line-height: 1.2rem;
  margin: 1rem 0;
  transition: 0.3s;
  padding: 0.5rem 0;
  animation: ${AnimationProduct} 0.3s forwards;

  &:hover {
    box-shadow: 0 0 7px 0 #cfd8dc;
  }

  p {
    margin: 0.7rem 0;
  }

  img {
    width: 100%;
  }

  button {
    padding: 5px;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid #f21905;

    transition: 0.2s;

    &:hover {
      color: #f21905;
      background-color: #fff;
    }
  }
`;

const PriceTotal = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 1.5rem;

  span {
    color: green;
    font-weight: 600;
  }
`;

export { AsideCart, Product, PriceTotal };
