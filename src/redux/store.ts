import { configureStore } from '@reduxjs/toolkit'
import cartSlice,{ hydrate as cartHydrate }  from './cartSlice'
import productsSlice from './productsSlice'

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const cartLS = loadFromLocalStorage('cart')
if (cartLS) store.dispatch(cartHydrate(cartLS))


store.subscribe(() => {
  saveToLocalStorage(store.getState().cart, 'cart')
})


function saveToLocalStorage(state: any, name: string) {
  try {
    const serialisedState = JSON.stringify(state)
    if (typeof window !== 'undefined')
      localStorage.setItem(name, serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage(name: string) {
  try {
    if (typeof window !== 'undefined') {
      const persistedState = localStorage.getItem(name)
      if (persistedState) return JSON.parse(persistedState)
    }
  } catch (e) {
    console.warn(e)
  }
}