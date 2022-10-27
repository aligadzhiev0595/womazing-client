import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../interfaces/IProducts'

type InitialStateProps = {
  productsData: IProducts[]
}

const initialState: InitialStateProps = {
  productsData: [],
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
  
  },
})

export const { getAllProducts,  } = productsSlice.actions

export default productsSlice.reducer
