import { Box, Button, RadioButton, Text, Form } from "grommet";
import React, { useContext, useState } from "react";
import { FraktData } from "./FraktData";
import { Redirect } from "react-router-dom";
import { ShippingContext } from "../contexts/ShippingContext";

export default function FraktForm() {
  const { shippingData, setShipping } = useContext(ShippingContext);

  const leveransDatum = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString();
  };

  const [selected, setSelected] = React.useState("");

  const [gotToNextStep, setgoToNextStep] = useState(false);
  function handleOnSubmit() {
    setgoToNextStep(true);
  }

  if (gotToNextStep) {
    return <Redirect to="/payment" />;
  }

  return (
      <Box fill={true}
      justify="center"
      alignContent="center"
      responsive={true}
      wrap={true} 
      >

    <Form validate="blur" onSubmit={handleOnSubmit}>
    <Box margin="small">
      <Text size="large" alignSelf="center">
        Var vänlig välj fraktsätt
      </Text>
      {FraktData.map(frakt => (
        <Box key={frakt.namn} margin={{ vertical: "medium" }} responsive={true}>
          <RadioButton
            name="shippingmethod"
            value={frakt.namn}
            checked={selected === frakt.namn}
            label={frakt.namn}
            onChange={e => {
              if (e.target.checked) {
                setSelected(frakt.namn);
                setShipping(frakt as any);
              }
            }}
          ></RadioButton>

          <Box direction="row" gap="small">
            <Text>{frakt.beskrivning}</Text>
          </Box>

          <Box direction="row" gap="small">
            <Text>Pris: {frakt.pris} :-</Text>
          </Box>
          <Box direction="row" gap="small">
            <Text>Leveransdatum: {leveransDatum(frakt.days)}</Text>
          </Box>
        </Box>
      ))}
        <Button type="submit" value="submit" label="Nästa" primary={true} color="buttons" />
    </Box>
 </Form>
 </Box>
  );
}
