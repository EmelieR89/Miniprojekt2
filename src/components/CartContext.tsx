import React, { useState, useEffect } from "react";
import { Product } from "./ProductData";

export const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  // countNumberOfItems: () => {},
  itemCounter: 0
});

interface Props {
  children: any;
}

interface CartItem {
  product: Product;
  count: number;
}

interface Cart {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  //countNumberOfItems: () => void;
  itemCounter: number;
}

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCounter, setItemCounter] = useState(0);

  useEffect(() => {
    countNumberOfItems();
  }, [cart]);

  const addToCart = (product: Product) => {
    const newCart: CartItem[] = Object.assign([], cart);
    if (newCart.length < 1) {
      setCart([{ product, count: 1 }]);
      console.log("i cart : " + cart);
      return;
    }
    for (const item of newCart) {
      if (item.product.id === product.id) {
        item.count++;
        setCart(newCart);
        console.log("i cart : " + cart);
        return;
      }
    }
    setCart([...cart, { product, count: 1 }]);
  };

  const removeFromCart = (product: Product) => {
    let removedCart: CartItem[] = [...cart];

    for (const item of removedCart) {
      if (item.product.id === product.id && item.count > 1) {
        item.count--;
        setCart(removedCart);
        return;
      }
      if (item.product.id === product.id && item.count === 1) {
        const filteredList = removedCart.filter(
          currentProduct => currentProduct.product.id !== item.product.id
        );
        setCart(filteredList);
      }
    }
  };

  const countNumberOfItems = () => {
    let counter = 0;
    for (let i = 0; i < cart.length; i++) {
      counter += cart[i].count;
    }
    setItemCounter(counter);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, itemCounter }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
