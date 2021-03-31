import React from "react";
import Header from "../src/components/Header/Header.js";
import BuyPage from "../src/pages/BuyPage";
import SellPage from "../src/pages/SellPage";
import HomePage from "../src/pages/HomePage";
import DetailsPage from "../src/pages/DetailsPage";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  state = {
    page: "Home",
    pageData: null,
  };

  changePage = (newPage, data) => {
    this.setState({ page: newPage });
    this.setState({ pageData: data });
  };

  render() {
    const renderPage = () => {
      if (this.state.page === "Home") {
        return <HomePage />;
      } else if (this.state.page === "Buy") {
        return <BuyPage changeToPage={this.changePage} />;
      } else if (this.state.page === "Sell") {
        return <SellPage />;
      }else if (this.state.page === "Details"){
        return <DetailsPage car={this.state.pageData} changeToPage={this.changePage}/>
      }
    };
    return (
      <div>
        <Header changeToPage={this.changePage} />
        {renderPage()}
        <Footer/>
      </div>
    );
  }
}
