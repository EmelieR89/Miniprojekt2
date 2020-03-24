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
        background="#d7ccc8"
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
              <Box pad="large" background="light-2">
                {/*             <Link to="/OmOss">Cart</Link>
                 */}
                <Link to="/CartPage">Cart</Link>
              </Box>
            }
          />

          <Heading level="2" style={styleHeading}>
            <img src="./KerstinLogga.PNG" alt="logo" style={imgStyle} />
          </Heading>
        </div>
        <Nav direction="row" background="#d7ccc8" pad="medium">
          <Link to="/">
            <Anchor icon={<Home />} color="#8c7b75" />
          </Link>
          <Link to="/">
            {" "}
            <Anchor icon={<Favorite />} color="#8c7b75" />{" "}
          </Link>
          <Link to="/CartPage">
            <Anchor icon={<Cart />} color="#8c7b75" />
          </Link>
        </Nav>
      </Box>
    );
  }
}

const styleHeading: CSSProperties = {
  color: "black",
  margin: "0 0 0 3rem"
};

const imgStyle: CSSProperties = {
  height: "8rem"
};

const firstPartOfHeader: CSSProperties = {
  display: "flex"
};
