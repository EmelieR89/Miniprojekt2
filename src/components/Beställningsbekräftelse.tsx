import React, { useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { CartContext } from "../contexts/CartContext";

export const Beställningsbekräftelse = () => {
  const { userData } = useContext(UserDataContext);
  const { cart } = useContext(CartContext);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Din order gick igenom");
    }, 3000);
  });

  promise.then(result => alert(result));

  return <div>{userData.name}</div>;
};
