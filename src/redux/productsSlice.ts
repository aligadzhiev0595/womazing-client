import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../interfaces/IProducts'

type InitialStateProps = {
  productsData: IProducts[]
  status: string
  size: string
  color: 'black' | 'white'
}

const initialState: InitialStateProps = {
  productsData: [],
  status: 'all',
  size: 's',
  color: 'black',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts(
      state: InitialStateProps,
      action: PayloadAction<IProducts[]>
    ) {
      state.productsData = action.payload
    },
    getStatus(state: InitialStateProps, action: PayloadAction<string>) {
      state.status = action.payload
    },
    getSize(state: InitialStateProps, action: PayloadAction<string>) {
      state.size = action.payload
    },
    getColor(state: InitialStateProps, action: PayloadAction<'black' | 'white'>) {
      state.color = action.payload
    },
  },
})

export const { getAllProducts, getStatus, getSize, getColor } =
  productsSlice.actions

export default productsSlice.reducer
