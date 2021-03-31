import React from "react";
import ProductCard from "../components/ProductsCard";
import styled from "styled-components";
import Footer from '../components/Footer/Footer'
export default class BuyPage extends React.Component {
  render() {
    return (
     
          <BuyContainer>
        <div>Aqui entra o filtro </div>
        <ProductCard changeToPageAgain={this.props.changeToPage} />
        <div>
      <Footer/>
    </div>
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

