import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Nav,
  DropButton,
  ResponsiveContext,
  Image,
  Button
} from "grommet";
import { Menu as Hamburger, Home, Cart, Favorite } from "grommet-icons";

interface Props {}

export default class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box
            tag="header"
            direction="row"
            align="center"
            justify="between"
            background="#d7ccc8"
            pad={{ left: "medium", right: "small", vertical: "small" }}
            elevation="medium"
            {...this.props}
          >
            <div style={firstPartOfHeader}>
              <DropButton
                label={<Hamburger />}
                plain
                dropAlign={{ top: "bottom", right: "right" }}
                dropContent={
                  <Box pad="large" background="light-2">
                    <Link to="/OmOss">Om oss</Link>
                    <Link to="/Gillade">Gillade</Link>
                    <Link to="/CartPage">Cart</Link>
                  </Box>
                }
              />

              <Box>
                <Image src="./KerstinLogga.PNG" style={imgStyle} />
              </Box>
            </div>
            {size !== "xsmall" && (
              <Nav direction="row" background="#d7ccc8" pad="medium">
                <Link to="/">
                  <Button icon={<Home />} color="#8c7b75" />
                </Link>
                <Link to="/">
                  {" "}
                  <Button icon={<Favorite />} color="#8c7b75" />{" "}
                </Link>
                <Link to="/CartPage">
                  <Button icon={<Cart />} color="#8c7b75" />
                </Link>
              </Nav>
            )}
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const imgStyle: CSSProperties = {
  height: "8rem",
  marginLeft: "2rem"
};

const firstPartOfHeader: CSSProperties = {
  display: "flex"
};
