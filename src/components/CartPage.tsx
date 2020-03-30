import React, { Component, CSSProperties, useContext } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import {
  Box,
  Form,
  FormField,
  Button,
  Select,
  RadioButton,
  Text
} from "grommet";
import { Product, productData } from "./ProductData";
import { CartContext } from "./CartContext";

interface Props extends RouteComponentProps<{ id: string }> {
  product: Product
}

interface State {
 
}

export default class CartPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    };
  

  render() {
    return (
      <CartContext.Consumer>
        {cartState => (
          <>
            {cartState.cart.map(item => (
              <Box
              justify="center" 
              align="center"
              width="small"
              basis="small"

              >
                {item.product.title}
                <img src={item.product.mainImg}/>
                {item.count}
                <Link to={"/FraktForm"}>
                <Button label="Gå vidare" size="small"></Button>
                </Link>
              </Box>
            ))}
          </>
        )}
      </CartContext.Consumer>
      
    );
}
}


