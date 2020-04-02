import React, { useContext } from "react";
import {grommet, Text, Heading, Box, Paragraph, Image} from 'grommet';
import { CartContext } from "../contexts/CartContext";
import { createWriteStream } from "fs";
import { ShippingContext, ShippingDataProvider } from "../contexts/ShippingContext";


export const Beställningsbekräftelse = () => {
  const { totalCost, cart } = useContext(CartContext);
  const {setShipping} = useContext(ShippingContext)

const ordernr = (max: number)  => {
  return (
    Math.floor(Math.random() * Math.floor(max))
  )
}
  
  return(
    <Box align="center" fill={true}>
      <Heading>Tack för din order!</Heading>
          <Text>Ditt ordernr är: {ordernr(2839873)} </Text>
          <Paragraph>
            Den totala summan på din order blev: {totalCost}
            {setShipping}

            {/* här vill vi hämta det vi har köpt, vad det kostade, och när det ska levereras */}
          </Paragraph>
          <Box fill={true}>
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

              <Image src={item.product.mainImg} fit="cover"/>
              <div>
                <Text>Antal: {item.count}</Text>
              </div>
            </Box>
          ))}
          
          </Box>
          </Box>
  )}
