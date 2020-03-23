import React from "react";
import { Grommet, ResponsiveContext } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
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
      control: "light"
    },
    font: {
      family: "Baloo 2, cursive",
      size: "18px",
      height: "20px"
    },
    menu: {
      background: "light"
    }
  }
};

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: {
        value: 2000
      }
    }
  }
});

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={{ ...theme, ...customBreakpoints }}>
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
