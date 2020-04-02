import React, { CSSProperties, useContext } from "react";
import {
  Box,
  Image as Picture,
  Paragraph,
  Button,
  ResponsiveContext
} from "grommet";
import { Cart, Favorite } from "grommet-icons";
import { Product } from "./ProductData";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../index.css";

interface Props {
  product: Product;
}

export const Card = (props: Props) => {
  const { addToCart } = useContext(CartContext);

  function showCartMessage() {
    const hej = document.getElementById("addToCartMessage");
    hej!.className = "show";
    setTimeout(function() {
      hej!.className = hej!.className.replace("show", "");
    }, 2000);
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="column" justify="center" align="center">
          <Box>
            <Picture fit="cover" src={props.product.mainImg} />
            <div style={styleParagraph}>
              <Paragraph
                alignSelf="center"
                margin={
                  size === "xsmall" ? "2px" : size === "small" ? "5px" : "10px"
                }
                responsive
                size={
                  size === "xsmall"
                    ? "small"
                    : size === "small"
                    ? "medium"
                    : "medium"
                }
              >
                {props.product.title}
              </Paragraph>
              <Paragraph 
              size={
                size === "xsmall"
                  ? "small"
                  : size === "small"
                  ? "medium"
                  : "medium"
              }
              >{props.product.price + " :-"}</Paragraph>
            </div>
          </Box>
          <div style={buttonStyles}>
            <Button
              icon={
                <Favorite
                  size={
                    size === "xsmall"
                      ? "small"
                      : size === "small"
                      ? "small"
                      : "medium"
                  }
                />
              }
              // onClick={addToCart} //  Like img
              color="blue"
            />
            <Button
              icon={
                <Cart
                  size={
                    size === "xsmall"
                      ? "small"
                      : size === "small"
                      ? "small"
                      : "medium"
                  }
                />
              }
              onClick={() => {
                addToCart(props.product);
                showCartMessage();
              }}
              color="blue"
            />
            <Link to={"productpage/" + props.product.id}>
              <Button
                label="Läs mer"
                size="small"
                color="#8c7b75"
                margin="0.3rem"
              />
            </Link>
          </div>
          <div id="addToCartMessage">Produkten har lagts till i kundvagnen</div>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

const buttonStyles: CSSProperties = {
  display: "flex"
};

const styleParagraph: CSSProperties = {
  display: "flex",
  justifyContent: "center"
};
