import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../interfaces/ICart'

type InitialStateProps = {
  cartData: ICart[]
}
const initialState: InitialStateProps = {
  cartData: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getProductCart(state: InitialStateProps, action: PayloadAction<ICart>) {
      state.cartData = [...state.cartData, action.payload]
    },
    removeProductCart(state: InitialStateProps, actiom: PayloadAction<number>) {
      state.cartData = state.cartData.filter(
        (product) => product.id !== actiom.payload
      )
    },
  },
})

export const { getProductCart, removeProductCart } = cartSlice.actions
export default cartSlice.reducer
