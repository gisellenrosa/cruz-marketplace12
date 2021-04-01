import React from "react";
import styled from "styled-components";
import Car from "../images/carro.jpg"

const CardContainer = styled.div`
  height: 28vh;
  display: flex;
  color: black;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  background-size: cover;
  cursor: pointer;
`;

const CardCar = styled.div`
background-image: url(${Car});
background-size:cover;
background-repeat:no-repeat;
height:24vh;
display:grid;
grid-template-rows:1fr 1fr;
gap:80px;
 border-radius:10px;
`;

const InfoCard = styled.p`
font-family:'nunito', sans-serif;
display:flex;
font-weight:700;
margin:4px 6px 0 6px;
font-size:16px;
border-radius:5px;
background-color:#ffffff99;
`;

const PriceLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
`;

const DetailsBtn = styled.button`
  background-color: #ff5c5c99;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #ff5c5c;
  }
`;

class CarCard extends React.Component {
  render() {
    const car = this.props.car;
    return (
      <CardContainer key={car.id}>
        <CardCar>
          <div>
            <InfoCard>{car.name}</InfoCard>
          </div>
          <PriceLine>
            <InfoCard>Valor: R${car.price}</InfoCard>
          </PriceLine>
        </CardCar>
          <DetailsBtn
            type="BtnScreen"
            onClick={() => {
              this.props.changeToPage("Details", car);
            }}
          >
            Ver mais
          </DetailsBtn>
      </CardContainer>
    );
  }
}

export default CarCard;
