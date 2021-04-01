import React from "react";
import CarsCard from "./CarsCard";
import styled from "styled-components";

const CarsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 1fr;
  background-image: linear-gradient(200deg, #e8ecef, white);
  height: 66vh;
  padding-right: 1%;
  padding-top: 1%;
`;

const CarsHeader = styled.div`
  grid-area: 2/1/3/2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  select {
    height: 24px;
  }
`;

const GridCardsContainer = styled.div`
  grid-area: 1/2/3/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80vw;
  gap: 2vw;
  overflow: scroll;
  overflow-x: hidden;
`;

const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
`;
const FilterContainer = styled.div`
  grid-area: 1/1/2/2;
  padding: 10px;
  border: 1px solid black;
  background-color: #e8ecef;
  color: #36414f;
  border-radius: 20px;
  margin: 8%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

class Cars extends React.Component {
  state = {
    order: "Preco",
  };

  onChangeFilter = (event) => {
    this.setState({ order: event.target.value });
  };

  Ordination = () => {
    const ordination = this.props.cars.sort((x, y) =>
      this.state.order === "Preco" ? x.price - y.price : x.shipping - y.shipping
    );
    return ordination;
  };

  render() {
    let orderedList = this.Ordination();
    return (
      <CarsContainer>
        <FilterContainer>
          <h2>Filtros:</h2>
          <LabelFilter>
            Busca por nome:
            <input
              type="text"
              value={this.props.filterName}
              onChange={this.props.onChangeFilterName}
            />
          </LabelFilter>
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
          <br />
          <button onClick={this.props.FilterClick}>Filtrar</button>
          <br />
          <button onClick={this.props.CleanFilter}>Limpar Filtro</button>
        </FilterContainer>
        <CarsHeader>
          <div>
            <label>Ordenar por: </label>
            <select onChange={this.onChangeFilter}>
              <option value="Preco">Preço </option>
              <option value="Prazo de Entrega">Prazo de Entrega </option>
            </select>
          </div>
        </CarsHeader>
        <GridCardsContainer>
          {orderedList.map((car) => {
            return (
              <CarsCard changeToPage={this.props.changeToPage} car={car} />
            );
          })}
        </GridCardsContainer>
      </CarsContainer>
    );
  }
}

export default Cars;
