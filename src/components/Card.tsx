import React, { CSSProperties, useContext } from "react";
import {
  Box,
  Image as Picture,
  Paragraph,
  Button,
  ResponsiveContext
} from "grommet";
import { Cart, Favorite } from "grommet-icons";
import { AppEvent } from "./ProductData";
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom"

interface Props {
  product: AppEvent;
}

export const Card = (props: Props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box direction="column" justify="center" align="center">
          <Box>
            <Picture fit="cover" src={props.product.mainImg} />
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
                  ? "small"
                  : "medium"
              }
            >
              {props.product.productTitle}
            </Paragraph>
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
              // onClick={() => addToCart(item)//  add to cart
              color="blue"
            />
            <Link to={"ProductPage/" + props.product.id}>
              <Button label="Läs mer" size="small" color="#8c7b75" margin="0.3rem"/>
            </Link>
          </div>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

const buttonStyles: CSSProperties = {
  display: "flex"
};
