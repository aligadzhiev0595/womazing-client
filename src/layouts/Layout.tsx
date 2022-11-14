import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
