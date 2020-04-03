import React, {
  useState,
  useContext,
  CSSProperties
} from "react";
import {
  Box,
  Text,
  FormField,
  RadioButtonGroup,
  Form,
  Button,
  MaskedInput,
  ResponsiveContext,
  Image
} from "grommet";
import { Redirect } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";
import { CartContext } from "../contexts/CartContext";
import { ShippingContext } from "../contexts/ShippingContext";
import { CreateOrder } from "../MockedAPI";

interface Props {}

export const Payment = (props: Props) => {
  const [value, setValue] = useState("Faktura");
  const [date, setDate] = useState("");
  const [cardnr, setCardNr] = useState("");
  const [isLoading, setLoading] = useState(false)
  const [isComplete, setComplete] = useState(false)

  const { userData } = useContext(UserDataContext);
  const { cart, totalCost } = useContext(CartContext);
  const { shippingData } = useContext(ShippingContext);


  const totalCostAllTogether = shippingData.selectedShipping.pris + totalCost;



  if (isComplete) {
    return <Redirect to="/beställningsbekräftelse" />
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box style={flexStyle}align="center">
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
                  value={userData.email}
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
                  value={userData.telefon}
                  required={true}
                  validate={{
                    regexp: /^[0-9+-]{0,15}$/,
                    message: "Använd siffror mellan 0-9"
                  }}
                />
                <br />
              </Form>
            </Box>
          )}
          {value === "Kort" && (
            <Box width={size === "xsmall" ? "small" : "medium"} margin="medium">
              <Form validate="blur">
                <Text size={size === "xsmall" ? "small" : "medium"}>Namn</Text>
                <FormField
                  name="cc-name"
                  value={userData.name}
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
            </Box>
          )}
          <Box align="center">
          totalkostnad: {totalCostAllTogether}:-
          
            <Button
              margin="medium"
              type="submit"
              label="Bekräfta köp"
              primary={true}
              disabled={isLoading}
              color="buttons"
              onClick={() => {
                setLoading(true)
                CreateOrder(cart, userData, shippingData.selectedShipping).then(resolve => {
                  setComplete(true)                
                })
              }}
            />
          </Box>
          <Box>
            {cart.map(item => (
              <Box
                width="small"
                height="small"
                margin="small"
                elevation="medium"
                responsive
              >
                <Text>
                  {item.product.title + "   "}
                  {item.product.price + " :- /st"}
                </Text>

                <Image src={item.product.mainImg} fit="cover" />
                <div>
                  <Text>Antal: {item.count}</Text>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

const flexStyle: CSSProperties = {
  display: "flex",
  flexGrow: 1,
  minHeight: "90%"
}

