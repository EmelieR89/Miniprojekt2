import React, { useContext, useState } from 'react';

export const ShippingContext = React.createContext<Shipping>({
    shippingData: {} as ShippingData,
    setShipping: () => {},
});

interface Props {
  children: React.ReactNode;
}
  
interface ShippingData {
    selectedShipping: string;
}

interface Shipping {
    shippingData: ShippingData;
    setShipping: (selectedShipping: ShippingData) => void;

}

export function ShippingDataProvider(props: Props) {
  const [shippingData, setShippingData] = useState<ShippingData>({
    selectedShipping: ""
  })

  const setShipping = (selectedShipping: ShippingData) => {
    
    setShippingData(selectedShipping)
  }
  console.log(shippingData + "datan");
  
  return(
    <ShippingContext.Provider value={{shippingData, setShipping}}>
      {props.children}
    </ShippingContext.Provider>
  )

}