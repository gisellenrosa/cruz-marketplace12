import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
`;

const Buttons = styled.div`
  margin-top: 90px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <div>
          <img
            onClick={() => {
              this.props.changeToPage("Home");
            }}
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6af9eda3-f4a0-46a8-96da-d290e1102a19%2Ffuturecar.png?table=block&id=56447354-1825-4378-b040-156dd065d298&width=3100&userId=4c407320-0851-42db-9ba2-49db837591f3&cache=v2"
            style={{ height: "200px" }}
          />
        </div>
        <Buttons>
            <div>
              <button
                
                onClick={() => {
                  this.props.changeToPage("Buy");
                }}
              >
                Compre um Carro
              </button>
            </div>
            <div>
              <button
                
                onClick={() => {
                  this.props.changeToPage("Sell");
                }}
              >
                Venda um carro
              </button>
            </div>
        </Buttons>
      </HeaderDiv>
    );
  }
}
