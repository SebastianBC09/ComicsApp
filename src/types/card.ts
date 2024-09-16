import { Product } from "./product";
import { User } from "./user";
import { Wishlist } from "./wishlist";

export interface Card {
  producto: Product
  user: User
  seeDetails: (id: number) => void
  wishlistItems: Wishlist[]

}
