import Image1 from "../assets/Postnord.png" 
import Image2 from "../assets/DHL.png"
import React, { Component } from 'react';

export interface FraktData {
    namn: string
    id: string
    pris: number 
    days: number 
    beskrivning: string
}

// const datumForLeverans = () => {
    
//     // let dd = String(today.getDate()).padStart(2, '0');
//     // let mm = String(today.getMonth() + 1).padStart(2, '0');
//     // let yyyy = today.getFullYear()
    
//     // today.toLocaleTimeString(dd + mm + yyyy)
//     return(today)
// }

export const FraktData: FraktData [] = [
    {
        namn: 'Postnord',
        id: 'frakt1',
        pris: 39,
        days: 2,
        beskrivning: 'Postnord hämtar ditt paket och leverar till ditt närmsta utlämningsställe.',
    },
    {
        namn: 'DHL',
        id: 'frakt2',
        pris: 59,
        days: 1,
        beskrivning: 'DHL hämtar ditt paket och leverar till ditt närmsta utlämningsställe.',
    },
    {
        namn: 'Hämta själv',
        id: 'frakt3',
        pris: 0,
        days: 1,
        beskrivning: 'Du hämtar ditt paket i butiken på utgivet leveransdatum.',
    }
]




