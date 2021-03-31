import React from "react";
import styled from "styled-components";
import axios from "axios";
import imageCar from "../images/carro-fiat-mobi.jpeg"

export default class ProductCard extends React.Component{ 
   state = {
    cars: []
  };

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars "
      )
      .then((res) => {
        console.log(res.data.cars);
        this.setState({ cars: res.data.cars });
      })
      .catch((err) => {
        console.log("Tente novamente");
        alert("Erro, tente novamente mais tarde!")
      });
  };

  render() {
    const products = this.state.cars.map((car) => (
      <CardContainer key={car.id} onClick={() => {
        this.props.changeToPageAgain("Details", car);
      }}>
        <p> {car.name} </p>
        <PriceLine>
        <p> Valor: R${car.price} </p>     
        <DetailsBtn  type="BtnScreen"   >Ver mais</DetailsBtn>
        </PriceLine>
      </CardContainer>
    ));

    return <GridCardsContainer>{products}</GridCardsContainer>;
  }
}
// CSS STYLED COMPONENTS

const GridCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 70vw;
  gap: 2vw;
`;
const PriceLine =styled.div`
color:white;
justify-content: space-between;
display: flex;
flex-direction: column;
font-size:20px;
`;

const CardContainer = styled.div`
  border-radius: 4%;
  height: 26vh;
  display: flex;
  color: white;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-image: url(${imageCar});
  background-size: cover;
  cursor:pointer;
`;

const DetailsBtn = styled.button`
  background-color: #FF5C5C99;
  color: white;
  border:0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition:300ms;
  :hover{
    background-color: #FF5C5C;
  }
`;
