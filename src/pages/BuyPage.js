import React from "react";
import { ProductCard } from "../Components/ProductsCard";
import styled from "styled-components";

export default class BuyPage extends React.Component {
  render() {
    return (
      <BuyContainer>
        <div>Aqui entra o filtro </div>
        <ProductCard />
      </BuyContainer>
    );
  }
}
const BuyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-image: linear-gradient(200deg, #e8ecef, white);
  height: 80vh;
`;

