import React, { CSSProperties } from "react";
import { Grommet, ResponsiveContext, Box } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

interface Props {}

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      control: "light",
      font: {
        family: "Baloo 2, cursive",
        size: "18px",
        height: "20px"
      },
      menu: {
        background: "light"
      }
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

export default class App extends React.Component<Props> {
  render() {
    return (
      <BrowserRouter> 
        <Grommet theme={{...theme, ...customBreakpoints }} full={true}>
          <Header />
          <Switch>
            <Route path="/" exact component={MainContent} />
            <Route path="/CartPage" component={CartPage} />
            <Route path="/ProductPage" component={ProductPage} />
          </Switch>
          <Footer />
        </Grommet>
      </BrowserRouter>
    );
  }
}

