import React, { CSSProperties, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Nav,
  DropButton,
  ResponsiveContext,
  Image,
  Button,
  Stack,
  Text
} from "grommet";
import { Menu as Hamburger, Home, Cart, Favorite } from "grommet-icons";
import { CartContext } from "./CartContext";

interface Props {}

export function Header(props: Props) {
  const { itemCounter } = useContext(CartContext);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          tag="header"
          direction="row"
          align="center"
          justify="between"
          background="header"
          pad={{ left: "medium", right: "small", vertical: "small" }}
          elevation="medium"
          {...props}
        >
          <div style={stylingHeader}>
            <DropButton
              label={<Hamburger />}
              plain
              dropAlign={{ top: "bottom", right: "right" }}
              dropContent={
                <Box pad="large" background="light-2">
                  <Link to="/OmOss" style={linkStyle}>
                    Om oss
                  </Link>
                  <Link to="/Gillade" style={linkStyle}>
                    Gillade
                  </Link>
                  <Link to="/CartPage" style={linkStyle}>
                    Cart
                  </Link>
                </Box>
              }
            />

            <Link to="/">
              <Image src="./KerstinLogga.PNG" style={imgStyle} />
            </Link>
          </div>
          <div style={stylingHeader}>
            {size !== "xsmall" && (
              <Nav direction="row" background="navbar">
                <Link to="/">
                  <Button icon={<Home />} color="icon" />
                </Link>
                <Link to="/">
                  {" "}
                  <Button icon={<Favorite />} color="icon" />{" "}
                </Link>
              </Nav>
            )}
            <Link to="/CartPage">
              <CartContext.Consumer>
                {cartState => (
                  <div>
                    {cartState.itemCounter < 1 ? (
                      <Button
                        icon={<Cart />}
                        color="icon"
                        style={{ marginLeft: "20px" }}
                      />
                    ) : (
                      <Stack anchor="top-right">
                        <Button icon={<Cart />} color="icon" />
                        <Box
                          background="#cdf9c6"
                          pad={{ horizontal: "xsmall" }}
                          round
                        >
                          <Text>{cartState.itemCounter}</Text>
                        </Box>
                      </Stack>
                    )}
                  </div>
                )}
              </CartContext.Consumer>
            </Link>
          </div>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

const imgStyle: CSSProperties = {
  height: "8rem",
  marginLeft: "2rem"
};

const stylingHeader: CSSProperties = {
  display: "flex"
};

const linkStyle: CSSProperties = {
  margin: "1rem",
  textDecoration: "None",
  color: "black"
};
