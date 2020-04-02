import React, { useContext } from "react";
import { Box, Form, FormField, Button } from "grommet";
import { Link } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext";

export default function UserData() {
  const { userData, setName, setEmail, setAddress, setTelefon, setCity, setZipCode } = useContext(UserDataContext);

  return (
    <Box align="center" responsive={true} fill={true} justify="center">
      <Form validate="blur">
        <FormField
          name="name"
          label="Namn"
          required={true}
          type="text"
          value={userData.name}
          onChange={e => setName(e.target.value)}
          validate={{ regexp: /^[a-öA-Ö]/, message: "Använd bokstäver" }}
        />

        <FormField
          name="address"
          label="Adress"
          value={userData.address}
          onChange={e => setAddress(e.target.value)}
          required={true}
          validate={{ regexp: /^[a-öA-ö]/, message: "Använd bokstäver" }}
        />

        <FormField
          name="zipcode"
          label="Postnummer"
          value={userData.zipCode}
          onChange={e => setZipCode(e.target.value)}
          required={true}
          validate={{
            regexp: /^[0-9]{0,9}$/,
            message: "Använd siffror mellan 0-9"
          }}
        />

        <FormField
          name="telefon"
          label="Telefonnummer"
          value={userData.telefon}
          onChange={e => setTelefon(e.target.value)}
          required={true}
          validate={{
            regexp: /^[0-9+-]{0,15}$/,
            message: "Använd siffror mellan 0-9"
          }}
        />

        <FormField 
          label="Stad" 
          name="City" 
          value={userData.city}
          onChange={e => setCity(e.target.value)}
          required={true}
          validate={{ regexp: /^[a-öA-ö]/, message: "Använd bokstäver" }}
          />

        <FormField 
        label="Mail"
        name="mail" 
        value={userData.email}
        onChange={e => setEmail(e.target.value)}
        type="email" 
        required={true} />

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
