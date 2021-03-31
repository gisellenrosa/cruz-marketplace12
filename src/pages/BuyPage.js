import React from "react";
import axios from "axios";
import styled from "styled-components";
import Car from "../images/carro.jpg"

export default class BuyPage extends React.Component {
  state = {
    cars: [],
    filterMin: "",
    filterMax: "",
    filterName: "",
    filterListCar:[]
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
        this.setState({ filterListCar: res.data.cars });
      })
      .catch((err) => {
        console.log("Tente novamente");
        alert("Erro, tente novamente mais tarde!");
      });
  };

  onChangeFilterMin = (e) => {
    this.setState({ filterMin: e.target.value });
  };
  onChangeFilterMax = (e) => {
    this.setState({ filterMax: e.target.value });
  };
  onChangeFilterName = (e) => {
    this.setState({ filterName: e.target.value });
  };

  cleanFilter = () => {
    this.setState({
      filterMin: "",
      filterMax: "",
      filterName: "",
      filterListCar:this.state.cars
      });
  };

  FilterList = (min, max, name) => {
    let filterByValue;
    if (min || max) {
      // Se min e max estiverem vazios ou = 0. Caso contrário, pula o filtro por valor.
      filterByValue = this.state.cars.filter((car) => {
        if (min && !max) {
          // Se min não estiver vazio ou === 0 e max sim.
          return car.price >= min;
        } else if (!min && max) {
          // Se max não estiver vazio ou === 0 e min sim.
          return car.price <= max;
        } else if (min && max) {
          // Se min e max não estiverem vazios ou !== 0
          return car.price >= min && car.price <= max;
        }
      });
    } else {
      filterByValue = this.state.cars;
    }

    let filter;
    if (name) {
      // Se o campo de busca por nome não estiver vazio. Caso contrário, pula o filtro por texto.
      filter = filterByValue.filter((car) => {
        return car.name.toLowerCase().includes(`${name.toLowerCase()}`);
      });
    } else {
      filter = filterByValue;
    }
    return filter;
  };
  FilterClick = () => {
    this.setState({ filterListCar: this.FilterList(
      this.state.filterMin,
      this.state.filterMax,
      this.state.filterName)});
  };

  render() {
   

    return (
      <BuyContainer>
        <FilterContent>
          <h2>Filtros:</h2>
          <LabelFilter>
            Busca por nome:
            <input
              type="text"
              value={this.state.filterName}
              onChange={this.onChangeFilterName}
            />
          </LabelFilter>
          <LabelFilter>
            Valor mínimo:
            <input
              type="number"
              value={this.state.filterMin}
              onChange={this.onChangeFilterMin}
            />
          </LabelFilter>
          <LabelFilter>
            Valor máximo:
            <input
              type="number"
              value={this.state.filterMax}
              onChange={this.onChangeFilterMax}
            />
          </LabelFilter>
          
          <button onClick={this.FilterClick}>Filtrar</button>
          <br/>
          <button onClick={this.cleanFilter}>Limpar Filtro</button>
        </FilterContent>
        <GridCardsContainer>
          {this.state.filterListCar.map((car) => {
            return (
              <CardContainer key={car.id}>
                <CardCar>
                <InfoCard>{car.name}</InfoCard>
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
          })}
        </GridCardsContainer>
      </BuyContainer>
    );
  }
}
// CSS STYLED COMPONENTS
const InfoCard = styled.p`
font-family:'nunito', sans-serif;
display:flex;
font-weight:bold;
margin:5px 6px;
font-size:16px;
background-color:#00000060;
border-radius:5px;
`;
const CardCar = styled.div`
background-image: url(${Car});
background-size:cover;
background-repeat:no-repeat;

 /* background-color: black; */
 height:24vh;
 border-radius:10px;
`;
const BuyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 66vh;
  padding-right:1%;
  padding-top:1%;
`;

const GridCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 80vw;
  gap: 2vw;
  overflow: scroll;
  overflow-x: hidden;
`;
const PriceLine = styled.div`
  color: white;
  display: flex;
  bottom:0;
  flex-direction: column;
`;

const CardContainer = styled.div`
  
  height:28vh;
  display: flex;
  color: white;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  background-size: cover;
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

const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
`;
const FilterContent = styled.div`
  padding: 8px;
`;

