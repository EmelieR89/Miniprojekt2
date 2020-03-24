import React, { Component, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Form, FormField, Button, Select, RadioButtonGroup, RadioButton, Text } from "grommet";

interface Props extends RouteComponentProps {}

interface State {
  isSubmitted: boolean
}

export default class CartPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isSubmitted: false
    }
    }

  handleSubmit = ()  => {
    this.setState({ isSubmitted: true })
    console.log("hejhej handlesubmit")
  
  }

  render() {
    if(this.state.isSubmitted === true) {
      return (
        <Box style={fraktButtons} fill={true}>
         <RadioButton
          name="postnord"
          label="postnord"
         />
         <RadioButton
          name="DHL"
          label="DHL"
         />
         <RadioButton
          name="Hämta själv"
          label="Hämta själv"
         />
        </Box>
      )
    } else {
      
      return(
        <Box align={"center"} responsive={true} fill={true} style={FormStyle}>
           <Form onSubmit={this.handleSubmit}>
        <FormField name="name" label="Namn" required={true} />
        <FormField name="address" label="Adress" required={true}/>
        <FormField name="telefonnummer" label="Telefonnummer" />
        <FormField name="mail" label="Mail" required={true}/>
        <FormField
          label="Land"
          name="select"
          component={Select}
          options={["Sverige", "Norge", "Finland"]}
        />
        <Button type="submit" label="Submit" primary={true} />
      </Form>
        </Box>

      )
    }
  }
}

const fraktButtons: CSSProperties = {
  display: "flex",
  justifyItems: "center",
  marginTop: "6rem",
  alignItems: "center"
}

const FormStyle: CSSProperties = {
  alignItems: "center",
  display: "flex",
  justifyItems: "center",
  marginTop: "6rem"
}


