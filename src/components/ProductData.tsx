import Image from "../assets/ceramics1.jpg";
import Image2 from "../assets/ceramics2.jpg";
import Image3 from "../assets/ceramics3.jpg";
import Image4 from "../assets/ceramics4.jpg";


export interface Product {
  mainImg: string;
  title: string;
  description: string;
  id: string;
}

export const productData: Product[] = [
  {
    mainImg: Image,
    title: "Karaff Eva",
    description: "En snygg och stilren karaff som passar bra till alla drycker.",
    id: "box1"
  },

  {
    mainImg: Image2,
    title: "Skål Märta",
    description: "Liten skål som passar perfekt till frukost eller tillbehör. Ø ca 12cm. ",
    id: "box2"
  },

  {
    mainImg: Image3,
    title: "Skål Boel",
    description: "En lite större skål som passar lika bra till frukosten som till soppan. Ø ca 24cm.",
    id: "box3"
  },

  {
    mainImg: Image4,
    title: "Kopp Ingrid",
    description: "Den perfekta kaffekoppen som är bekväm att hålla i och som håller värmen bra. ",
    id: "box4"
  }
];