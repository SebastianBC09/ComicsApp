import { Product } from "./product";

export interface Wishlist {
  id: number;
  userId: number;
  productoId: number;
  producto: Product | null;
}
