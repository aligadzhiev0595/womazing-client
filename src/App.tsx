import { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contacts } from './pages/index'
import { Home } from './pages/index'
import { Shop } from './pages/index'
import { Brands } from './pages/index'
import { Cart } from './pages/index'
import { NotFound } from './pages/index'
import { ItemProduct } from './pages/index'
import { Layout } from './layouts/Layout'
import axios from 'axios'
import './i18n'
import { useAppDispatch } from './redux/redux.hooks'
import { getAllProducts } from './redux/productsSlice'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/shop/')
        dispatch(getAllProducts(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [dispatch])


  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:id' element={<ItemProduct />} />
          <Route path='brands' element={<Brands />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
