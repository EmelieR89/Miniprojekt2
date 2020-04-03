import React, { useState, useEffect } from 'react';
import { Product } from "../components/ProductData";

export const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  itemCounter: 0,
  totalCost: 0
});

interface Props {
  children: React.ReactNode;
}

interface CartItem {
  product: Product;
  count: number;
}

interface Cart {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;

  itemCounter: number;
  totalCost: number;
}

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [itemCounter, setItemCounter] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    countNumberOfItems();
    addTotalCost();
  }, [cart]);

  const addTotalCost = () => {
    const sum = cart.reduce((total, itemproduct) => {
      return total + itemproduct.product.price * itemproduct.count;
    }, 0);
    setTotalCost(sum);
  };

  const countNumberOfItems = () => {
    const counter = cart.reduce((numberOfItems, item) => {
      return numberOfItems + item.count;
    }, 0);
    setItemCounter(counter);
  };

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

  const clearCart = () => {
    let clearedCart: CartItem[] = [...cart]
    clearedCart = []
    setCart(clearedCart)
    return
  }

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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, itemCounter, totalCost, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
