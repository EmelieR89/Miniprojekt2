import React, { Component } from "react";
import { Box, Image as Picture } from "grommet";
import { productData, AppEvent } from "./ProductData";
import Image from "../assets/ceramics1.jpg"

interface Props {
  event: AppEvent;
}

export default class ProductPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }


  render() {
    console.log(this.props.event + " propsen");
    
    return (
      <Box>
        <Picture src={Image} fit="cover"/>
      </Box>
    );
  }
}
