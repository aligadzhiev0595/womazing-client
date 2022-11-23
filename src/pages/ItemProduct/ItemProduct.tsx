import { Breadcrumbs } from '../../components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/redux.hooks'
import { getColor, getSize } from '../../redux/productsSlice'
import { getProductCart } from '../../redux/cartSlice'
import { IProducts } from '../../interfaces/IProducts'
import { ICart } from '../../interfaces/ICart'
import axios from 'axios'

import s from './ItemProduct.module.scss'

export const ItemProduct = () => {
  const params = useParams()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const [product, setProduct] = useState<IProducts>()

  const color = useAppSelector((s) => s.products.color)
  const size = useAppSelector((s) => s.products.size)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://womazing-backend.vercel.app/api/products/${params.id}`
        )
        setProduct(data)
        dispatch(getColor(data.colors[0]))
        dispatch(getSize(data.size[0]))
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [])

  const onAddToCart = async (obj: ICart) => {
    const { data } = await axios.post('https://womazing-backend.vercel.app/api/cart', obj)
    dispatch(getProductCart(data))
  }

  return (
    <main>
      <section className={s.itemProduct}>
        <div className='container'>
          {product && (
            <>
              <h2 className={s.title}>{product.title}</h2>
              <Breadcrumbs
                pathname={pathname}
                params={params}
                product={product}
              />
              <div className='row'>
                <div className='col col-6 col-md-12'>
                  <div className={s.wrapper}>
                    <img
                      className={s.wrapperImg}
                      src={`../${product.image[color]}`}
                      alt='clothes'
                    />
                  </div>
                </div>
                <div className='col col-6 col-md-12'>
                  <div className={s.wrapper}>
                    <div className={s.wrapperText}>
                      <p className={s.priceSale}>
                        {product.priceSale ? (
                          <>
                            <span
                              className={s.price}
                              style={{ textDecoration: 'line-through' }}
                            >
                              ${product.price}
                            </span>
                            <span className={s.priceDash}>-</span>
                            <span className={s.price}>
                              ${product.priceSale}
                            </span>
                          </>
                        ) : (
                          <span className={s.price}>${product.price}</span>
                        )}
                      </p>
                      <p className={s.choose}>{t('product.chooseSize')}</p>
                      <ul className={s.chooseSize}>
                        {product.size.map((el: any) => (
                          <li
                            key={el}
                            onClick={() => dispatch(getSize(el))}
                            className={[
                              s.chooseSizeItem,
                              el === size ? s.active : '',
                            ].join(' ')}
                          >
                            {el}
                          </li>
                        ))}
                      </ul>
                      <p className={`${s.choose} ${s.chooseC}`}>
                        {t('product.chooseColor')}
                      </p>
                      <ul className={s.chooseColor}>
                        {product.colors.map((el: any) => (
                          <li
                            key={el}
                            onClick={() => dispatch(getColor(el))}
                            style={{
                              background: el,
                              border: '1px solid grey',
                              cursor: 'pointer',
                            }}
                            className={[
                              s.chooseColorItem,
                              el === color ? s.active : '',
                            ].join(' ')}
                          />
                        ))}
                      </ul>
                      {product.inStock ? (
                        <p className={s.wrapperStock}>
                          {t('product.est')} <span>{product.inStock} </span>
                          <span>{t('product.par')}</span>
                        </p>
                      ) : (
                        <p className={s.wrapperStock}>{t('product.noStock')}</p>
                      )}
                    </div>
                    <div>
                      <button
                        className='mt-40 d-flex j-center a-center'
                        onClick={() =>
                          onAddToCart({
                            _id: product._id,
                            title: product.title,
                            image: product.image,
                            color,
                            size,
                            price: product.priceSale || product.price,
                            category: product.category,
                          })
                        }
                      >
                        ADD TO CARD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
