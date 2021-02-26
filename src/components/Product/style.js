import styled from "styled-components";

const ImageProduct = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ProductItem = styled.div`
  /* border: 1px solid #000; */
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0 0 8px 1px #bdbdbd;
  }

  h2 {
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  p {
    padding: 0.5rem;
  }

  p:nth-child(3) {
    color: #00c853;
    font-weight: 600;
    font-size: 1.2rem;
  }

  p:nth-child(4) {
    margin-bottom: 3rem;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const ButtonAddCart = styled.button`
  height: 2rem;
  width: 100%;
  font-weight: 600;
  color: #fff;
  background-color: ${({ addCart }) => (addCart ? "red" : "#00c853")};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
  position: absolute;
  bottom: 10px;
  width: 90%;
  left: 50%;
  transform: translatex(-50%);

  &:hover {
    background-color: ${({ addCart }) => (addCart ? "#e53935" : "#00e676")};
  }
`;

export { ImageProduct, ProductItem, ProductContainer, ButtonAddCart };
