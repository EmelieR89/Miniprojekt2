import React from "react";
import { Grommet } from "grommet";
import { Header } from "./components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { CartPage } from "./components/CartPage";
import { ProductPage } from "./components/ProductPage";
import { CartProvider } from "../src/components/CartContext";
import OmOss from "./components/OmOss";
import FraktForm from "./components/FraktForm";
import DinaUppgifter from "./components/DinaUppgifter";
import { Payment } from "./components/Payment";
import { Beställningsbekräftelse } from "./components/Beställningsbekräftelse";

const theme = {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      }
    },

    focus: {
      border: {
        color: "#d7ccc8"
      }
    },

    colors: {
      header: "#d7ccc8",
      footer: "#d7ccc8",
      icons: "#8c7b75",
      text: "black",
      navbar: "#d7ccc8",
      buttons: "#a1887f"
    },
    font: {
      family: "Baloo 2, cursive",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Grommet theme={theme} full>
          <Header />
          <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/ProductPage/:id" component={ProductPage} />
            <Route path="/CartPage/" component={CartPage} />
            <Route path="/OmOss" component={OmOss} />
            <Route path="/DinaUppgifter" component={DinaUppgifter} />
            <Route path="/FraktForm" component={FraktForm} />
            <Route path="/Payment" component={Payment} />
            <Route
              path="/Beställningsbekräftelse"
              component={Beställningsbekräftelse}
            />
          </Switch>
          <Footer />
        </Grommet>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
