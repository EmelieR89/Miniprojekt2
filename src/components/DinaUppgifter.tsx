import React from "react";
import { Box, Form, FormField, Button, Select } from "grommet";
import { Link } from "react-router-dom";

interface Props {}

interface State {
  isSubmitted: boolean;
  selected: {};
}

export default class DinaUppgifter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isSubmitted: false,
      selected: {}
    };
  }

  render() {
    return (
      <Box align="center" responsive={true} fill={true} justify="center">
        <Form validate="blur">
          <FormField
            name="name"
            label="Namn"
            required={true}
            type="text"
            validate={{ regexp: /^[a-öA-Ö]/, message: "Använd bokstäver" }}
          />

          <FormField
            name="address"
            label="Adress"
            required={true}
            validate={{ regexp: /^[a-öA-ö]/, message: "Använd bokstäver" }}
          />

          <FormField
            name="postnummer"
            label="Postnummer"
            required={true}
            validate={{
              regexp: /^[0-9]{0,9}$/,
              message: "Använd siffror mellan 0-9"
            }}
          />

          <FormField
            name="telefonnummer"
            label="Telefonnummer"
            required={true}
            validate={{
              regexp: /^[0-9+-]{0,15}$/,
              message: "Använd siffror mellan 0-9"
            }}
          />

          <FormField name="mail" label="Mail" type="email" required={true} />

          <FormField
            label="Land"
            name="select"
            component={Select}
            options={["Sverige", "Norge", "Finland"]}
          />
          <Link to="/FraktForm">
            <Button
              fill="horizontal"
              type="submit"
              label="Submit"
              primary={true}
              color="buttons"
            />
          </Link>
        </Form>
      </Box>
    );
  }
}
