import { Breadcrumbs } from '../../components'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import InputMask from 'react-input-mask'

import s from './Contacts.module.scss'


export const Contacts = () => {
  const { t } = useTranslation()
  const {pathname} = useLocation()

  return (
 <main>
     <section className={s.contacts}>
      <div className='container'>
        <h2
          className={s.title}
          dangerouslySetInnerHTML={{ __html: t('contacts.crumbs.title') }}
        />
           <Breadcrumbs pathname={pathname}/>

        <div className='row'>
          <div className='col col-12 col-md-12'>
            <div className={s.wrapperMap}></div>
          </div>
          <div className='col col-12 col-md-12'>
            <div className={s.wrapperText}>
              <div className={s.wrapperInfo}>
                <h4
                  className={`${s.wrapperTitle} mb-10`}
                  dangerouslySetInnerHTML={{ __html: t('contacts.info.tel') }}
                />
                <a href='tel:74958235412' className={s.wrapperLink}>
                  +7 (495) 823-54-12
                </a>
              </div>
              <div className={s.wrapperInfo}>
                <h4
                  className={`${s.wrapperTitle} mb-10`}
                  dangerouslySetInnerHTML={{ __html: t('contacts.info.eMail') }}
                />
                <a href='mail:info@sitename.com' className={s.wrapperLink}>
                  info@sitename.com
                </a>
              </div>
              <div className={s.wrapperInfo}>
                <h4
                  className={`${s.wrapperTitle} mb-10`}
                  dangerouslySetInnerHTML={{
                    __html: t('contacts.info.address'),
                  }}
                />
                <p
                  className={s.wrapperLink}
                  dangerouslySetInnerHTML={{
                    __html: t('contacts.info.street'),
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col col-12 col-md-12'>
            <div className={s.wrapperForm}>
              <h3
                className={s.wrapperFormTitle}
                dangerouslySetInnerHTML={{ __html: t('contacts.form.title') }}
              />
              <form className={s.form}>
                <input type='hidden' name='_captcha' value='false' />
                <input
                  type='hidden'
                  name='_next'
                  value='http://localhost:3000/'
                />
                <input
                  className={s.formInput}
                  type='text'
                  placeholder={t('contacts.form.name')}
                />
                <input
                  className={s.formInput}
                  name='email'
                  type='email'
                  placeholder={t('contacts.form.eMail')}
                />
                <InputMask
                  mask={`+\\7\\(999)99-99-99`}
                  type='tel'
                  id='tel'
                  className={s.formInput}
                  placeholder={t('contacts.form.phoneNumber')}
                />
                <textarea
                  className={s.formMessage}
                  placeholder={t('contacts.form.message')}
                />
                <button
                  className={s.formBtn}
                  type='submit'
                  dangerouslySetInnerHTML={{ __html: t('contacts.form.btn') }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
 </main>
  )
}
