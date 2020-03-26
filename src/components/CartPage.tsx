import React, { Component, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Form, FormField, Button, Select, RadioButton, Text } from "grommet";
import { AppEvent } from "./ProductData";

interface Props extends RouteComponentProps {}

interface State {
  isSubmitted: boolean
  selected: {}
}

export default class CartPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isSubmitted: false,
      selected: {},
    }
    }

  handleSubmit = ()  => {
    this.setState({ isSubmitted: true })
    console.log("hejhej handlesubmit")
  
  }

  render() {
    const { selected } = this.state;
    if(this.state.isSubmitted === true) {
      return (
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
      </Box>
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


