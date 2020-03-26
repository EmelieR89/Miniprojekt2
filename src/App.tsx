import React from "react";
import { Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import { CartProvider } from "../src/components/CartContext";

const theme =  {
  global: {
    focus: {
      border: {
        color: "#d7ccc8",
    }},
    colors: {
      header: "#d7ccc8",
      footer: "#d7ccc8",
      icons: "#8c7b75",
      text: "black",
      navbar: "#d7ccc8",
      buttons: "#a1887f",
  },
    font: {
      family: "Baloo 2, cursive",
      size: "18px",
      height: "20px"
    },
  }}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Grommet theme={theme} full>
          <Header />
          <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/ProductPage/:id" component={ProductPage} />
            <Route path="/CartPage" component={CartPage} />
          </Switch>
          <Footer />
        </Grommet>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
