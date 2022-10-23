export interface ICard {
  category: string
  id: number
  title: string
  price: number
  priceSale: number
  inStock: number
  colors: string[]
  size: string[]
  image: {
    black: string
    red: string
    white: string
    blue: string
  }
}

export interface ICart {
  category: string
  color: string
  id: number
  title: string
  price: number
  image: {
    black: string
    red: string
    white: string
    blue: string
  }
  size: string
}
