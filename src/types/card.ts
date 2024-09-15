import { Producto } from "./producto";

export interface Card {
  producto: Producto
  seeDetails: (id: number) => void
}
