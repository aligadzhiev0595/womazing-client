import { Breadcrumbs } from '../../components'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import s from './Brands.module.scss'
import brandsImg1 from '../../assets/image/brands/idea.png'
import brandsImg2 from '../../assets/image/brands/magic.png'

export const Brands = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  return (
    <main>
      <section className={s.brands}>
        <div className='container'>
          <h2
            className={s.title}
            dangerouslySetInnerHTML={{ __html: t('brands.about.title') }}
          />
          <Breadcrumbs pathname={pathname} />
          <div className={` ${s.row} row`}>
            <div className='col col-6 col-md-12'>
              <div className={s.wrapperIdea}>
                <img className={s.wrapperImg} src={brandsImg1} alt='' />
              </div>
            </div>
            <div className='col col-6 col-md-12'>
              <div className={s.wrapperIdea}>
                <h3
                  className={s.subtitle}
                  dangerouslySetInnerHTML={{ __html: t('brands.idea.title') }}
                />
                <p
                  className={s.desc}
                  dangerouslySetInnerHTML={{ __html: t('brands.idea.text') }}
                />
                <p
                  className={s.desc}
                  dangerouslySetInnerHTML={{ __html: t('brands.idea.text1') }}
                />
              </div>
            </div>
          </div>
          <div className={`${s.rowReverse} row`}>
            <div className='col col-6 col-md-12'>
              <div className={s.wrapperMagic}>
                <h3
                  className={s.subtitle}
                  dangerouslySetInnerHTML={{
                    __html: t('brands.magic.title'),
                  }}
                />
                <p
                  className={s.desc}
                  dangerouslySetInnerHTML={{ __html: t('brands.magic.text') }}
                />
                <p
                  className={s.desc}
                  dangerouslySetInnerHTML={{
                    __html: t('brands.magic.text1'),
                  }}
                />
              </div>
            </div>
            <div className='col col-6 col-md-12'>
              <div className={s.wrapperMagic}>
                <img className={s.wrapperImg} src={brandsImg2} alt='' />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col col-12'>
              <div className='d-flex j-center'>
                <Link to='/shop'>
                  <button
                    className={s.btn}
                    type='button'
                    dangerouslySetInnerHTML={{ __html: t('brands.magic.btn') }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
