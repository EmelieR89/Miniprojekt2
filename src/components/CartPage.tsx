import React, { Component, CSSProperties, useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  Box,
  Form,
  FormField,
  Button,
  Select,
  RadioButton,
  Text,
  Image,
  Paragraph
} from "grommet";
import { Product, productData } from "./ProductData";
import { CartContext } from "./CartContext";

interface Props extends RouteComponentProps<{ id: string }> {}

interface State {
  isSubmitted: boolean;
  selected: {};
}

// export default class CartPage extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       isSubmitted: false,
//       selected: {}
//     };
//   }

export const CartPage = (props: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selected, setSelected] = useState({});
  const { removeFromCart } = useContext(CartContext);

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted);
    // this.setState({ isSubmitted: true });
  };
  // console.log("Props fmor chartPage: " + props.product.id);

  return (
    <CartContext.Consumer>
      {cartState => (
        <>
          {cartState.cart.map(item => (
            <Box
              width="small"
              height="small"
              margin="small"
              elevation="medium"
              responsive
            >
              <Text>{item.product.title}</Text>
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
        </>
      )}
    </CartContext.Consumer>
  );

  /* 
    const { selected } = this.state;
    if(this.state.isSubmitted === true) {
      return (

        <Box>

        <Box align={"center"} responsive={true} fill={true} style={FormStyle}>
          <Text>Här kan det stå lite info om vilket fraktsätt man vill välja. </Text>
          <Box align='start'>
          {['PostNord', 'DHL', 'Hämta själv'].map(label => (
            <Box key={label} margin={{ vertical: 'small' }}>
              <RadioButton
                name='prop'
                checked={selected === label}
                label={label}
                onChange={() => this.setState({ selected: label })}
              />
            </Box>
          ))}
        </Box>
      </Box>        </Box>

      )
    } else {
      
      return(
        <Box align="center" responsive={true} fill={true} style={FormStyle}>
           <Form onSubmit={this.handleSubmit}>
        <FormField name="name" label="Namn" required={true}/>
        <FormField name="address" label="Adress" required={true}/>
        <FormField name="telefonnummer" label="Telefonnummer" />
        <FormField name="mail" label="Mail" required={true}/>
        <FormField
          label="Land"
          name="select"
          component={Select}
          options={["Sverige", "Norge", "Finland"]}
        />
        <Button type="submit" label="Submit" primary={true} color="buttons"/>
      </Form>
        </Box>
  
      )
    }  */
};

const fraktButtons: CSSProperties = {
  display: "flex",
  justifyItems: "center",
  marginTop: "6rem",
  alignItems: "center"
};

const FormStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  justifyItems: "center",
  marginTop: "6rem"
};

const productBox: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0.2rem"
};
