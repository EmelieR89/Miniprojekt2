import React, { useContext } from "react";
import {
  Box,
  Image as Picture,
  Grid,
  Button,
  ResponsiveContext,
  Text
} from "grommet";
import { productData, Product } from "./ProductData";
import { RouteComponentProps } from "react-router-dom";
import { Cart } from "grommet-icons";
import { CartContext } from "../contexts/CartContext";
import "../index.css";

interface Props extends RouteComponentProps<{ id: string }> {
  product: Product;
}

function showCartMessage() {
  const hej = document.getElementById("addToCartMessage");
  hej!.className = "show";
  setTimeout(function() {
    hej!.className = hej!.className.replace("show", "");
  }, 2000);
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
    <ResponsiveContext.Consumer>
      {size => (
        <Grid
          responsive
          justify="center"
          margin="small"
          fill="vertical"
          rows={size === "xsmall" ? ["10rem", "15rem"] : ["xsmall", "medium"]}
          columns={size === "xsmall" ? ["15rem"] : ["medium"]}
          gap="small"
          areas={[
            { name: "infoText", start: [0, 0], end: [1, 0] },

            { name: "biggerPicture", start: [0, 1], end: [1, 1] }
          ]}
        >
          <Box justify="center" gridArea="infoText">
            <Text>
              {product.title} <br />
            </Text>{" "}
            <Text size={size === "xsmall" ? "small" : "medium"}>
              {product.description} <br />
              {product.price + " :-"}
            </Text>
          </Box>

          <Box gridArea="biggerPicture">
            <Picture src={product.mainImg} fit="contain" />
            <Button
              alignSelf="center"
              label="Köp"
              color="light-2"
              margin="small"
              icon={<Cart />}
              onClick={() => {
                addToCart(product);
                showCartMessage();
              }}
            />
            <div id="addToCartMessage">
              {product.title} har lagts till i kundvagnen
            </div>
          </Box>
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  );
}
