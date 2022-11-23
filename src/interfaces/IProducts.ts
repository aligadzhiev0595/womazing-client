export interface IProducts {
  category: string
  _id: number
  title: string
  price: number
  priceSale: number
  inStock: number
  colors: string[]
  size: string[]
  image: {
    black: string
    white: string
  }
}
