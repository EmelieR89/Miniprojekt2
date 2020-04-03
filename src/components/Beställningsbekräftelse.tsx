import React, { useContext, useEffect, useState, CSSProperties } from "react";
import { Text, Heading, Box, Image, ResponsiveContext } from "grommet";
import { CartContext } from "../contexts/CartContext";
import { ShippingContext } from "../contexts/ShippingContext";

export const Beställningsbekräftelse = () => {
  const { totalCost, cart, clearCart } = useContext(CartContext);
  const { setShipping, shippingData } = useContext(ShippingContext);
  
  // Save to local state so we can clear the cart context
  const [ totalCostSaved ] = useState(totalCost);
  const [ cartSaved ] = useState(cart);


  const totalCostAllTogether = shippingData.selectedShipping.pris + totalCostSaved;
  
  
  const leveransDatum = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };
  const ordernr = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // ComponentDidMount equivialent
  useEffect(() => {
    clearCart();
  }, [])

  return (
    <ResponsiveContext.Consumer>
      {size =>(
    <Box style={flexStyle}align="center" margin="medium" gap="small">
      <Heading>Tack för din order!</Heading>
      <Text size={size==="xsmall" ? "small": "medium"}>Ditt ordernr är: {ordernr(2839873)} </Text>
      <Text size={size==="xsmall" ? "small": "medium"}>Den totala summan på din order blev: {totalCostAllTogether} :- </Text>
      <Text size={size==="xsmall" ? "small": "medium"}>
        Din order kommer att finnas tillhanda den: {leveransDatum(shippingData.selectedShipping.days)}
      </Text>
      <Text size={size==="xsmall" ? "small": "medium"}>En sammanfattning av din order kan du se här: </Text>
      <Box fill={true} align="center">
        {cartSaved.map(item => (
          <Box
            width="small"
            height="small"
            margin="small"
            elevation="medium"
            responsive
          >
            <Text size={size==="xsmall" ? "small": "medium"}>
              {item.product.title + "   "}
              {item.product.price + " :- /st"}
            </Text>

            <Box>
              <Text size={size==="xsmall" ? "small": "medium"}>Antal: {item.count}</Text>
              <Image src={item.product.mainImg} fit="cover" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
    )}
</ResponsiveContext.Consumer>
  );
};

const flexStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  minHeight: "90%"
}

