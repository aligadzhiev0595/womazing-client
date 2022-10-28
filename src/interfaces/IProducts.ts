export interface IProducts {
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
    white: string
  }
  // image: {
  //   [key: string]: string
  // }
}
// export interface ICart {
//   category: string
//   color: string
//   id: number
//   title: string
//   price: number
//   image: {
//     black: string
//     red: string
//     white: string
//     blue: string
//   }
//   size: string
// }
