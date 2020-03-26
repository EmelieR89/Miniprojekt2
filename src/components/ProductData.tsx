import Image from "../assets/ceramics1.jpg";
import Image2 from "../assets/ceramics2.jpg";
import Image3 from "../assets/ceramics3.jpg";
import Image4 from "../assets/ceramics4.jpg";


export interface AppEvent {
  mainImg: string;
  productTitle: string;
  productText: string;
  id: string;
}

export const productData: AppEvent[] = [
  {
    mainImg: Image,
    productTitle: "Karaff Eva",
    productText: "En snygg och stilren karaff som passar bra till alla drycker.",
    id: "box1"
  },

  {
    mainImg: Image2,
    productTitle: "Skål Märta",
    productText: "Liten skål som passar perfekt till frukost eller tillbehör. Ø ca 12cm. ",
    id: "box2"
  },

  {
    mainImg: Image3,
    productTitle: "Skål Boel",
    productText: "En lite större skål som passar lika bra till frukosten som till soppan. Ø ca 24cm.",
    id: "box3"
  },

  {
    mainImg: Image4,
    productTitle: "Kopp Ingrid",
    productText: "Den perfekta kaffekoppen som är bekväm att hålla i och som håller värmen bra. ",
    id: "box4"
  }
];