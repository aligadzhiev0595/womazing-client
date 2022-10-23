import { Breadcrumbs } from '../../components'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

import s from './ItemProduct.module.scss'

interface ItemProductProps {
  items: any
  onAddToCart: (el: any) => void
  product: any
  setProduct: (el: any) => void
}
export const ItemProduct = ({
  items,
  onAddToCart,
  product,
  setProduct,
}: ItemProductProps) => {
  const params = useParams()
  const { pathname } = useLocation()
  const [size, setSize] = useState('')
  const [color, setColor] = useState('black')
  const { t } = useTranslation()

  useEffect(() => {
    axios.get(`http://localhost:8080/shop/${params.id}`).then(({ data }) => {
      setProduct(data)
      setColor(data.colors[0])
      setSize(data.size[0])
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, items])

  return (
    <main>
      <section className={s.itemProduct}>
        <div className='container'>
          {product.title && (
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
                            onClick={() => setSize(el)}
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
                            onClick={() => setColor(el)}
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
                            // id: product.id,
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
