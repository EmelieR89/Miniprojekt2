import React, { CSSProperties, useContext } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Box, Button, Text, Image, Paragraph } from "grommet";
import { CartContext } from "../contexts/CartContext";
import "../index.css"

interface Props extends RouteComponentProps<{ id: string }> {}

export const CartPage = (props: Props) => {
  const { removeFromCart, totalCost, cart } = useContext(CartContext);

  
  if (cart.length >= 1) {
    return (
      <Box style={flexStyle} align="center">
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
              label="Nästa"
              primary={true}
              color="buttons"
            ></Button>
          </Link>
        </Box>
      </Box>
    );
  }

  return (
    <Box fill={true} flex="grow" align="center">
      <Text margin="small" size="large">
        Din kundvagn
      </Text>
    </Box>
  );
};

const productBox: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0.2rem"
};

const flexStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  minHeight: "90%"
}
