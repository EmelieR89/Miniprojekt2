import React, { Component, CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Box, Form, FormField, Button, Select } from "grommet";

interface Props extends RouteComponentProps {}

export default class CartPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Box align={"center"} responsive={true}>
        <Form>
          <FormField name="name" label="Namn" required={true} />
          <FormField name="address" label="Adress" required={true} />
          <FormField name="telefonnummer" label="Telefonnummer" />
          <FormField name="mail" label="Mail" required={true} />
          <FormField
            label="Land"
            name="select"
            component={Select}
            options={["Sverige", "Norge", "Finland"]}
          />
          <Button type="submit" label="Submit" primary={true} />
        </Form>
      </Box>
    );
  }
}
