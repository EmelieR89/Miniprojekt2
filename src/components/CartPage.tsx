import React, { Component, CSSProperties, useContext, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Box, Button, Text, Image, Paragraph } from "grommet";
import { Product, productData } from "./ProductData";
import { CartContext } from "./CartContext";

interface Props extends RouteComponentProps<{ id: string }> {}

export const CartPage = (props: Props) => {
  const { removeFromCart, totalCost } = useContext(CartContext);

  // console.log("Props fmor chartPage: " + props.product.id);

  return (
    <CartContext.Consumer>
      {cartState => (
        <>
          {cartState.cart.map(item => (
            <Box
              width="small"
              height="small"
              margin="small"
              elevation="medium"
              responsive
            >
              <Text>
                {item.product.title + "   "}
                {item.product.price + " :- /st"}
              </Text>

              <Image src={item.product.mainImg} fit="cover" />
              <div style={productBox}>
                <Text>Antal: {item.count}</Text>

                <Button
                  label="Remove"
                  onClick={() => removeFromCart(item.product)}
                  color="buttons"
                  size="small"
                />
              </div>
            </Box>
          ))}
          <Box>
            <Paragraph>Totalbelopp: {totalCost + ":-"} </Paragraph>
          </Box>
          <Link to="/FraktForm">
            <Button
              type="submit"
              label="checka ut"
              primary={true}
              color="buttons"
            ></Button>
          </Link>
        </>
      )}
    </CartContext.Consumer>
  );
};

const productBox: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0.2rem"
};
