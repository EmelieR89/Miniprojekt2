import React from "react";
import { Grommet } from "grommet";
import { Header } from "./components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import { CartPage } from "./components/CartPage";
import { ProductPage } from "./components/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import OmOss from "./components/OmOss";
import FraktForm from "./components/FraktForm";
import UserData from "./components/UserData";
import { Payment } from "./components/Payment";
import { Beställningsbekräftelse } from "./components/Beställningsbekräftelse";
import { UserDataProvider } from "./contexts/UserDataContext";
import { ShippingDataProvider } from "./contexts/ShippingContext";

const theme = {
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: {
        value: 1000
      },
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
      <ShippingDataProvider>
        <UserDataProvider>
          <CartProvider>
            <Grommet theme={theme} full>
              <Header />
              <Switch>
                <Route path="/" exact component={MainContent} />
                <Route path="/productpage/:id" component={ProductPage} />
                <Route path="/cartpage/" component={CartPage} />
                <Route path="/omoss" component={OmOss} />
                <Route path="/userdata" component={UserData} />
                <Route path="/fraktform" component={FraktForm} />
                <Route path="/payment" component={Payment} />
                <Route
                  path="/beställningsbekräftelse"
                  component={Beställningsbekräftelse}
                />
              </Switch>
              <Footer />
            </Grommet>
          </CartProvider>
        </UserDataProvider>
      </ShippingDataProvider>
    </BrowserRouter>
  );
}

export default App;
