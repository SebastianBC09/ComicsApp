import { Producto } from "./producto";

export interface Card {
  producto: Producto
  seeDetails: (id: number) => void
  isInWishlist: boolean
  toggleWishlist: (producto: Producto) => void
}
