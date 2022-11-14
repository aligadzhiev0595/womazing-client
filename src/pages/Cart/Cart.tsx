import { useTranslation } from 'react-i18next'
import { CartCard } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../redux/redux.hooks'

import s from './Cart.module.scss'

export const Cart = () => {
  const cartData = useAppSelector((s) => s.cart.cartData)
  const color = useAppSelector((s) => s.products.color)

  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <main>
      <section className={s.cart}>
        <div className='container'>
          <h2
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t('basket.title') }}
          />
          <Breadcrumbs pathname={pathname} />
          <div className='row'>
            {cartData.length > 0 ? (
              cartData.map((el) => (
                <CartCard img={`../${el.image[color]}`} {...el} key={el.id} />
              ))
            ) : (
              <div className='col col-12'>
                <div className={s.emptyCart}>
                  <h2>Cart is Empty</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
