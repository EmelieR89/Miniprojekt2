import React, { Component, useEffect, useState } from "react";
import {
  Box,
  RadioButton,
  Text,
  FormField,
  RadioButtonGroup,
  Paragraph,
  Form,
  Button,
  MaskedInput,
  ResponsiveContext
} from "grommet";
import { Link } from "react-router-dom";

interface Props {}

export const Payment = (props: Props) => {
  const [value, setValue] = useState("Faktura");
  const [date, setDate] = useState("");
  const [cardnr, setCardNr] = useState("");

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill={true}>
          <RadioButtonGroup
            margin="medium"
            name="betalningssätt"
            options={["Faktura", "Swish", "Kort"]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          {value === "Faktura" && (
            <Box width={size === "xsmall" ? "small" : "medium"} margin="medium">
              <Form>
              <FormField
                name="email"
                autoComplete="on"
                label="Mail"
                type="email"
                required={true}
              />
              </Form>
            </Box>
          )}
          {value === "Swish" && (
            <Box width="small" margin="medium">
              <Form validate="blur">
                <FormField
                  name="tel"
                  autoComplete="on"
                  label="Telefonnummer"
                  required={true}
                  validate={{
                    regexp: /^[0-9+-]{0,15}$/,
                    message: "Använd siffror mellan 0-9"
                  }}
                />
                <br />
                <Link to="/Beställningsbekräftelse">
                  <Button
                    type="submit"
                    label="Submit"
                    primary={true}
                    color="buttons"
                  />
                </Link>
              </Form>
            </Box>
          )}
          {value === "Kort" && (
            <Box width={size === "xsmall" ? "small" : "medium"} margin="medium">
              <Form validate="blur">
                <Text size={size === "xsmall" ? "small" : "medium"}>Namn</Text>
                <FormField
                  name="cc-name"
                  autoComplete="on"
                  // label="Namn"
                  required={true}
                  type="text"
                  validate={{
                    regexp: /^[a-öA-Ö]/,
                    message: "Använd bokstäver"
                  }}
                />
              </Form>
              <br />
              <Text size={size === "xsmall" ? "small" : "medium"}>
                Giltighetsdatum
              </Text>
              <MaskedInput
                name="cc-exp"
                autoComplete="on"
                size={size === "xsmall" ? "small" : "medium"}
                mask={[
                  {
                    length: [1],
                    options: [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12"
                    ],
                    regexp: /^1[1-2]$|^[0-9]$/,
                    placeholder: "mm"
                  },
                  { fixed: "/" },
                  {
                    length: 2,
                    options: [
                      "2020",
                      "2021",
                      "2022",
                      "2023",
                      "2024",
                      "2025",
                      "2026"
                    ],
                    regexp: /^[0-2][0-9]$|^[0-9]$/,
                    placeholder: "yy"
                  }
                ]}
                value={date}
                onChange={event => setDate(event.target.value)}
              />
              <br />

              <Text size={size === "xsmall" ? "small" : "medium"}>
                Kortnummer
              </Text>
              <MaskedInput
                name="cc-number"
                autoComplete="on"
                size={size === "xsmall" ? "small" : "medium"}
                mask={[
                  {
                    length: 4,
                    regexp: /^[0-9]{1,4}$/,
                    placeholder: "xxxx"
                  },
                  { fixed: " " },
                  {
                    length: 4,
                    regexp: /^[0-9]{1,4}$/,
                    placeholder: "xxxx"
                  },
                  { fixed: " " },
                  {
                    length: 4,
                    regexp: /^[0-9]{1,4}$/,
                    placeholder: "xxxx"
                  },
                  { fixed: " " },
                  {
                    length: 4,
                    regexp: /^[0-9]{1,4}$/,
                    placeholder: "xxxx"
                  }
                ]}
                value={cardnr}
                onChange={event => setCardNr(event.target.value)}
              />
              <br />
              <Text size={size === "xsmall" ? "small" : "medium"}>CVC</Text>

              <MaskedInput
                name="cc-csc"
                autoComplete="on"
                size={size === "xsmall" ? "small" : "medium"}
                mask={[
                  {
                    length: 3,
                    regexp: /^[0-9]{1,3}$/,
                    placeholder: "xxx"
                  }
                ]}
              />
              <br />
              <Link to="/Beställningsbekräftelse">
                <Button
                  type="submit"
                  label="Submit"
                  primary={true}
                  color="buttons"
                />
              </Link>
            </Box>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
