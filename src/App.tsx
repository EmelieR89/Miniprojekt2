import React from "react";
import { Grommet } from "grommet";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      control:"light"
    },
    font: {
      family: "Baloo 2, cursive", // Vilken font ska vi ha?
      size: "18px",
      height: "20px"
    },
    menu: {
      background: "light"
    }

  }
};

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme}>
        <Header />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/product/:productID" component={ProductPage} />
          <Route path="/CartPage" component={CartPage} />
        </Switch>
        <Footer />
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
