import Image from "../assets/ceramics1.jpg";
import Image2 from "../assets/ceramics2.jpg";
import Image3 from "../assets/ceramics3.jpg";
import Image4 from "../assets/ceramics4.jpg";


export interface AppEvent {
  mainImg: string;
  productText: string;
  id: string;
}

export const productData: AppEvent[] = [
  {
    mainImg: Image,
    productText: "Info om product 1",
    id: "box1"
  },

  {
    mainImg: Image2,
    productText: "Info om product 2",
    id: "box2"
  },

  {
    mainImg: Image3,
    productText: "Info om product 3",
    id: "box3"
  },

  {
    mainImg: Image4,
    productText: "Info om product 4",
    id: "box4"
  }
];