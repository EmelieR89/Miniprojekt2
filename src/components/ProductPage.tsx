import React, { Component } from "react";
import { Box, Image as Picture } from "grommet";
import { productData, AppEvent } from "./ProductData";
import Image from "../assets/ceramics1.jpg"
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{id: string}>{

}

export default class ProductPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log(this.props.match.params.id);
    
    const product = productData.find((product) => product.id == this.props.match.params.id)

    if(!product){
      return(
        <h1>produkten finns inte!!!!!!!!</h1>
      )
    }
    return (
      <Box>

        <Picture src={product.mainImg} fit="cover"/>
      </Box>
    );
  }
}
