import React, { useState } from "react";

export const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {}
});

interface Props {
  children: any;
}

interface Cart {
  cart: any[];
  addToCart: (item: object) => void;
}

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState([] as any);

  const addToCart = (item: object) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
