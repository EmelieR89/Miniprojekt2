import React, { useContext } from "react";
import {grommet, Text, Heading, Box, Paragraph, Image} from 'grommet';
import { CartContext } from "../contexts/CartContext";
import { createWriteStream } from "fs";
import { ShippingContext, ShippingDataProvider } from "../contexts/ShippingContext";


export const Beställningsbekräftelse = () => {
  const { totalCost, cart } = useContext(CartContext);
  const {setShipping, shippingData} = useContext(ShippingContext)

const ordernr = (max: number)  => {
  return (
    Math.floor(Math.random() * Math.floor(max))
  )
}
  
  return(
    <Box align="center" fill={true} gap="small">
      <Heading>Tack för din order!</Heading>
          <Text>Ditt ordernr är: {ordernr(2839873)} </Text>
          <Text>Den totala summan på din order blev: {totalCost}</Text>
            {/* här vill vi hämta det vi har köpt, vad det kostade, och när det ska levereras */}
          <Text>Din order kommer att finnas tillhanda den: {shippingData.selectedShipping}</Text>
          <Text>En sammanfattning av din order kan du se här: </Text>
          <Box fill={true} alignContent="center" direction="row">
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

              
              <Box>
                <Text>Antal: {item.count}</Text>
                <Image src={item.product.mainImg} fit="cover"/>
              </Box>
            </Box>
          ))}
          
          </Box>
          </Box>
  )}
