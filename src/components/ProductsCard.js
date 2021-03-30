import React from "react";
import styled from "styled-components";
import axios from "axios";

export class ProductCard extends React.Component {
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
      });
  };

  render() {
    const products = this.state.cars.map((car) => (
      <CardContainer key={car.id}>
        <p> {car.name} </p>
        <p> Valor: {car.price} </p>
        {/* Função no onclik precisa mudar o estado da tela no App.js */}
        {/* onClick={() => this.nomedafuncaodoDetail(car)} */}
        <DetailsBtn type="BtnScreen">Ver mais</DetailsBtn>
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

const CardContainer = styled.div`
  border-radius: 4%;
  height: 26vh;
  display: flex;
  color: white;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-image: url("https://blog.catarinacarros.com.br/wp-content/uploads/2020/12/carro-fiat-mobi.jpeg");
  background-size: cover;
`;

const DetailsBtn = styled.button`
  background-color: pink;
  color: white;
  border-radius: 8px;
  font-size: 1.2rem;
`;
