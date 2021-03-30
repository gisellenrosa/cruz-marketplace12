import React from "react";


export default class DetailsPage extends React.Component {
  render() {
    return (
      <div>
          Aqui é a page de Details<br></br>
          {this.props.car.name}
      </div>
    );
  }
}


