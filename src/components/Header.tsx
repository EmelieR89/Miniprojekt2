import React, { CSSProperties } from "react";
import { Menu, Box, Heading, Anchor, Nav } from "grommet";
import { Menu as Hamburger, Home, Cart, Favorite } from "grommet-icons";

interface Props {}

export default class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="#d7ccc8"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        // style={{ zIndex: "1" }}
        {...this.props}
      >
        <Menu
          label={<Hamburger /> } 
          items={[
            { label: "Produkter", href: "#"},
            { label: "Kassa", href: "#" }
          ]}
        />
        <Heading level="2" style={styleHeading}>
          <img src="./KerstinsLogo.png" alt="logo" style={imgStyle}/>
        </Heading>
        <Nav direction="row" background="#d7ccc8" pad="medium">
          <Anchor icon={<Home />} color="#8c7b75" />
          <Anchor icon={<Favorite/>} color="#8c7b75" />
          <Anchor icon={<Cart />} color="#8c7b75" />
        </Nav>
      </Box>
    );
  }
}

const styleHeading: CSSProperties = {
  color: "black",
  margin: 0
};

const imgStyle: CSSProperties = {
  height: "8rem",
}

