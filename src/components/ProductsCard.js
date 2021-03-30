import React from "react";
import styled from "styled-components";
import axios from "axios";

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
      
      <div key={car.id}>
        <CardImg>  </CardImg>
        <CardContainer>
        <p> {car.name} </p>
        <p> Valor: {car.price} </p>
        {/* Função no onclik precisa mudar o estado da tela no App.js */}
        {/* onClick={() => this.nomedafuncaodoDetail(car)} */}
        <DetailsBtn  type="BtnScreen"  onClick={() => {
              this.props.changeToPageAgain("Details", car);
            }} >Ver mais</DetailsBtn>
      </CardContainer>
      </div>
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
  height: 10vh;
  display: flex;
  color: black;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color:white;
  
`;

const CardImg = styled.div`
height: 20vh;
border-radius: 4%;
background-size: cover;
background-image: url("https://blog.catarinacarros.com.br/wp-content/uploads/2020/12/carro-fiat-mobi.jpeg");
`;

const DetailsBtn = styled.button`
  background-color: #FF5C5C99;
 
  border: 0;
  color: white;
  border-radius: 5px;
  margin-top:10px;
  font-size: 1.2rem;
  cursor:pointer;
  :hover{
  background-color:#FF5C5C;
}
`;
