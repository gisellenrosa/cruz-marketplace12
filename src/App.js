import React from "react";
import Header from "../src/components/Header/Header.js";
import BuyPage from "../src/pages/BuyPage";
import SellPage from "../src/pages/SellPage";
import HomePage from "../src/pages/HomePage";

export default class App extends React.Component {
  state = {
    page: "Home"
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    const renderPage = () => {
      if (this.state.page === "Home") {
        return <HomePage />;
      } else if (this.state.page === "Buy") {
        return <BuyPage />;
      } else if (this.state.page === "Sell") {
        return <SellPage />;
      }
    };
    return (
      <div>
        <Header changeToPage={this.changePage} />
        {renderPage()}
        {/* <footer/> */}
      </div>
    );
  }
}
