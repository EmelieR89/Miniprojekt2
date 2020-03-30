import react from 'react'
import Image1 from "../assets/Postnord.png" 
import Image2 from "../assets/DHL.png"


export interface FraktData {
    namn: string
    id: string
    pris: number 
    timmar: number 
    DatumTimmar: number
    beskrivning: string
}

const date = new Date().getDate()

export const FraktData: FraktData [] = [
    {
        DatumTimmar: date + 2,
        namn: 'Postnord',
        id: 'frakt1',
        pris: 39,
        timmar: 48,
        beskrivning: 'Postnord hämtar ditt paket och leverar till närmsta uthämtningsställe.',
    },
    {
        DatumTimmar: date + 1,
        namn: 'DHL',
        id: 'frakt2',
        pris: 59,
        timmar: 24,
        beskrivning: 'Postnord hämtar ditt paket och leverar till närmsta uthämtningsställe.',
    },
    {
        DatumTimmar: date + 1,
        namn: 'Hämta själv',
        id: 'frakt3',
        pris: 0,
        timmar: 24,
        beskrivning: 'Postnord hämtar ditt paket och leverar till närmsta uthämtningsställe.',
    }
]
