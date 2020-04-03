import React, { Component, CSSProperties, useContext, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Box, Button, Text, Image, Paragraph, Heading } from "grommet";
import { CartContext } from "../contexts/CartContext";

interface Props extends RouteComponentProps<{ id: string }> {}

export const CartPage = (props: Props) => {
  const { removeFromCart, totalCost, cart } = useContext(CartContext);

  // console.log("Props fmor chartPage: " + props.product.id);

  return (
    // <Box fill={true} margin="medium">
    //   {cart.map(item => (
    //     <Box width="small" height="small" elevation="medium" responsive>
    //       <Text>
    //         {item.product.title + "   "}
    //         {item.product.price + " :- /st"}
    //       </Text>

    //       <Image src={item.product.mainImg} fit="cover" />
    //       <div style={productBox}>
    //         <Text>Antal: {item.count}</Text>

    <Box fill={true} flex="grow" align="center">
      <Text margin="small" size="large">
        Din kundvagn
      </Text>
      {cart.map(item => (
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
      <Box wrap={true}>
        <Paragraph>Totalbelopp: {totalCost + ":-"} </Paragraph>
        <Link to="/userdata">
          <Button
            type="submit"
            label="checka ut"
            primary={true}
            color="buttons"
          ></Button>
        </Link>
      </Box>
    </Box>
  );
};

const productBox: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0.2rem"
};
