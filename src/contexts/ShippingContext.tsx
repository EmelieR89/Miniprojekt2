import React, { useState } from "react";
import { FraktData } from "../components/FraktData";

export const ShippingContext = React.createContext<Shipping>({
  shippingData: {} as ShippingData,
  setShipping: () => {}
});

interface Props {
  children: React.ReactNode;
}

interface ShippingData {
  selectedShipping: FraktData;
}

interface Shipping {
  shippingData: ShippingData;
  setShipping: (selectedShipping: FraktData) => void;
}

export function ShippingDataProvider(props: Props) {
  const [shippingData, setShippingData] = useState<ShippingData>({
    selectedShipping: {
      beskrivning: "",
      days: NaN,
      id: "",
      namn: "",
      pris: NaN
    }
  });

  const setShipping = (choosenShipment: FraktData) => {
    console.log("SetShipp" + choosenShipment);

    setShippingData({
      selectedShipping: {
        beskrivning: choosenShipment.beskrivning,
        days: choosenShipment.days,
        id: choosenShipment.id,
        namn: choosenShipment.namn,
        pris: choosenShipment.pris
      }
    });
  };
  console.log(shippingData.selectedShipping.pris + "datan");

  return (
    <ShippingContext.Provider value={{ shippingData, setShipping }}>
      {props.children}
    </ShippingContext.Provider>
  );
}
