import { iProduct } from "./product";

export interface iProducts {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}
