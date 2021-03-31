import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class BuyPage extends React.Component {
  state = {
    cars: [],
    filterMin: 1,
    filterMax: 500000,
    filterName: "",
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

    FilterList = () => {
    const filterListName = this.state.cars.filter(car => car.name.includes(this.state.filterName))
    const filterListMin = filterListName.filter(car => car.price >= this.state.filterMin)
    const filterListMax = filterListMin.filter(car => car.price <= this.state.filterMax)
    return filterListMax
  }

  render() {
    const FilterList = this.FilterList()

    return (
      <BuyContainer>
        <FilterContent>
        <h2>Filtros:</h2>
        <LabelFilter>
          Valor mínimo:
          <input
            type="number"
            value={this.props.filterMin}
            onChange={this.props.onChangeFilterMin}
          />
        </LabelFilter>
        <LabelFilter>
          Valor máximo:
          <input
            type="number"
            value={this.props.filterMax}
            onChange={this.props.onChangeFilterMax}
          />
        </LabelFilter>
        <LabelFilter>
          Busca por nome:
          <input
            type="text"
            value={this.props.filterName}
            onChange={this.props.onChangeFilterName}
          />
        </LabelFilter>
        
      </FilterContent>
        <GridCardsContainer>
          {FilterList.map((car) => {
            return (
            <CardContainer key={car.id}>
            <p>{car.name}</p>
            <PriceLine>
            <p>Valor: R${car.price}</p>
            <DetailsBtn
            type="BtnScreen"
            onClick={() => {
              this.props.changeToPage("Details", car);
            }}
          >
            Ver mais
          </DetailsBtn>
        </PriceLine>
      </CardContainer>
            )
          })}
      </GridCardsContainer>
      </BuyContainer>
    );
  }
}
// CSS STYLED COMPONENTS

const BuyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-image: linear-gradient(200deg, #e8ecef, white);
  height: 80vh;
`;

const GridCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 70vw;
  gap: 2vw;
  overflow: scroll;
  overflow-x: hidden;
`;
const PriceLine = styled.div`
  color: white;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const CardContainer = styled.div`
  border-radius: 4%;
  height: 26vh;
  display: flex;
  color: white;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: black;
  background-size: cover;
  cursor: pointer;
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
