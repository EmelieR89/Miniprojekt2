import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Anchor, Nav, DropButton } from "grommet";
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
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        // style={{ zIndex: "1" }}
        {...this.props}
      >
        <DropButton
          label={<Hamburger />}
          dropAlign={{ top: "bottom", right: "right" }}
          dropContent={
            <Box pad="large" background="light-2">
              {/*             <Link to="/OmOss">Cart</Link>
               */}
              <Link to="/CartPage">Cart</Link>
            </Box>
          }
        />

        <Heading level="2" style={styleHeading}>
          <img src="./KerstinsLogo.png" alt="logo" style={imgStyle} />
        </Heading>
        <Nav direction="row" background="brand" pad="medium">
          <Link to="/">
            <Anchor icon={<Home />}/>
          </Link>
         <Link to="/"> <Anchor icon={<Favorite />} /> </Link>
          <Link to="/CartPage">
            <Anchor icon={<Cart />} />
          </Link>
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
  height: "8rem"
};
