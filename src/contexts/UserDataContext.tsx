import React, { useState } from 'react';

export const UserDataContext = React.createContext<User>({
    userData: {} as UserData,
    setName: () => {},
    setEmail: () => {},
    setTelefon: () => {},
    setAddress: () => {},
    setZipCode: () => {},
    setCity: () => {},
});

interface Props {
  children: React.ReactNode;
}
  
interface UserData {
    name: string;
    email: string;
    telefon: string;
    address: string;
    zipCode: string;
    city: string;
}

interface User {
    userData: UserData;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setTelefon: (telefon: string) => void;
    setAddress: (address: string) => void;
    setZipCode: (zipCode: string) => void;
    setCity: (city: string) => void;
}

export function UserDataProvider(props: Props) {
    const [userData, setUserData] = useState<UserData>({
        name: "",
        email: "",
        telefon: "",
        address: "",
        zipCode: "",
        city: "",
    })

    console.log("state", userData);
    
    const setName = (name: string) => setUserData({ ...userData, name })
    const setEmail = (email: string) => setUserData({ ...userData, email })
    const setTelefon = (telefon: string) => setUserData({ ...userData, telefon})
    const setAddress = (address: string) => setUserData({ ...userData, address })
    const setZipCode = (zipCode: string) => setUserData({ ...userData, zipCode })
    const setCity = (city: string) => setUserData({ ...userData, city })



    return (
        <UserDataContext.Provider value={{ userData, setName, setEmail, setTelefon, setAddress, setZipCode, setCity }}>
            {props.children}
        </UserDataContext.Provider>
    )
}