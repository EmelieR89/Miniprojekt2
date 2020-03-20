import React from "react";
import { Grommet } from "grommet";
import Header from "./components/Header";

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
    <Grommet theme={theme}>
      <Header />
    </Grommet>
  );
}

export default App;
