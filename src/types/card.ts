import { Product } from "./product";
import { User } from "./user";
import { Wishlist } from "./wishlist";

export interface Card {
  producto: Product
  seeDetails: (id: number) => void
}
