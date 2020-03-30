import React, { useContext } from "react";
import { Box, Image as Picture, Grid, Button } from "grommet";
import { productData, Product } from "./ProductData";
import { RouteComponentProps } from "react-router-dom";
import { Cart } from "grommet-icons";
import { CartContext } from "./CartContext";

interface Props extends RouteComponentProps<{ id: string }> {
  product: Product
}


export function ProductPage(props: Props) {

    const product = productData.find(
      product => product.id === props.match.params.id
    );

    const { addToCart } = useContext(CartContext);


    if (!product) {
      return (
        <Box justify="center" align="center" fill>
          <h3>Produkten du försökte hitta finns tyvärr inte.</h3>
        </Box>
      );
    }
    return (
      <Grid
        responsive
        justify="center"
        margin="small"
        fill="vertical"
        rows={["xsmall", "medium"]}
        columns={["medium"]}
        gap="small"
        areas={[
          { name: "infoText", start: [0, 0], end: [1, 0] },

          { name: "biggerPicture", start: [0, 1], end: [1, 1] }
        ]}
      >
        <Box justify="center" gridArea="infoText">
          {product.title} <br/>
          {product.description}
        </Box>

        <Box gridArea="biggerPicture">

          <Picture src={product.mainImg} fit="contain" />
          <Button
            alignSelf="center"
            label="Köp"
            color="light-2"
            margin="small"
            icon={<Cart />}
            onClick={() => addToCart(product)}

          />
        </Box>
      </Grid>
    ); 
  }


