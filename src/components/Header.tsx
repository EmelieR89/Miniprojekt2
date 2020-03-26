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
        direction="row"
        align="center"
        justify="between"
        background="header"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation="medium"
        // style={{ zIndex: "1" }}
        {...this.props}
      >
        <div style={firstPartOfHeader}>
          <DropButton
            label={<Hamburger />}
            plain
            dropAlign={{ top: "bottom", right: "right" }}
            dropContent={
              <Box pad="large" background="">
                {/*             <Link to="/OmOss">Cart</Link>
                 */}
                <Link to="/CartPage">Cart</Link>
              </Box>
            }
          />

          <Heading level="2" color="navbar" style={styleHeading}>
            <img src="./KerstinLogga.PNG" alt="logo" style={imgStyle} />
          </Heading>
        </div>
        <Nav direction="row" background="navbar" pad="medium">
          <Link to="/">
            <Anchor icon={<Home />} color="icons" />
          </Link>
          <Link to="/">
            {" "}
            <Anchor icon={<Favorite />} color="icons" />{" "}
          </Link>
          <Link to="/CartPage">
            <Anchor icon={<Cart />} color="icons" />
          </Link>
        </Nav>
      </Box>
    );
  }
}

const styleHeading: CSSProperties = {
  margin: "0 0 0 3rem"
};

const imgStyle: CSSProperties = {
  height: "8rem"
};

const firstPartOfHeader: CSSProperties = {
  display: "flex"
};
