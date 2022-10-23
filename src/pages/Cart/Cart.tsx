import { useTranslation } from 'react-i18next'

import s from './Cart.module.scss'
import { CartCard } from '../../components'
import { Breadcrumbs } from '../../components'
import { useLocation } from 'react-router-dom'

export const Cart = ({ cart, removeCart }: any) => {
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
            {cart.length > 0 ? (
              cart.map((el: any, idx: any) => (
                <CartCard
                  img={`../${el.image[Object.keys(el.image)[0]]}`}
                  {...el}
                  removeCart={removeCart}
                  key={idx}
                />
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
