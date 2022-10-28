import { Suspense, useState, useEffect } from 'react'
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
  // const [product, setProduct] = useState<any>([])
  const [cart, setCart] = useState<any>([])
  const [sort, setSort] = useState('')

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

  const onAddToCart = async (obj: any) => {
    const res = await axios.post('http://localhost:8080/cart/', obj)
    setCart([...cart, res.data])
  }
  const removeCart = (id: any) => {
    axios.delete(`http://localhost:8080/cart/${id}`)
    setCart(cart.filter((el: any) => el.id !== id))
  }
  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart') || '{}'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='shop' element={<Shop sort={sort} setSort={setSort} />} />
          <Route
            path='shop/:id'
            element={
              <ItemProduct
                onAddToCart={onAddToCart}
                // product={product}
                // setProduct={setProduct}
              />
            }
          />
          <Route path='brands' element={<Brands />} />
          <Route path='contacts' element={<Contacts />} />
          <Route
            path='cart'
            element={<Cart cart={cart} removeCart={removeCart} />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
