import React, { useState } from "react";
import { Product } from "./ProductData";
import { Button } from "grommet";

export const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
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
}

export const CartProvider = (props: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const newCart: CartItem[] = Object.assign([], cart)
    for (const item of newCart) {
      if (item.product.id === product.id) {
        item.count++
        setCart(newCart)
        
        return(
          <Button onClick={() => removeFromCart(product)}>
            ta bort
          </Button>
        )
      }
    }

    setCart([...cart, {product, count: 1}]);
  };

  const removeFromCart = (product: Product) => {
    const removedCart: CartItem[] = Object.assign([], cart)
    for( const item of removedCart) {
      if(item.product.id === product.id && item.count>1){
        item.count--
          setCart(removedCart)

          return
      }
    }
    setCart([...cart, {product, count: -1}]);

  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
