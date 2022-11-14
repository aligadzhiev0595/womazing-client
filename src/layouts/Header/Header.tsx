import { useState } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BsHandbag } from 'react-icons/bs'

import s from './Header.module.scss'
import logo from '../../assets/icons/logo.svg'

export const Header = () => {
  const [burger, setBurger] = useState(false)
  const { t, i18n } = useTranslation()
  let { pathname } = useLocation()

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang)
  }
  const burgerHandler = () => {
    if (!burger) {
      setBurger(true)
      document.body.classList.add('overflow')
    } else {
      setBurger(false)
      document.body.classList.remove('overflow')
    }
  }
  const closeBurger = () => {
    setBurger(false)
    document.body.classList.remove('overflow')
  }

  return (
    <header className={s.header}>
      <div className='container'>
        {/* NAVIGATION START */}
        <nav className={` d-flex j-between a-center`}>
          <ul className={`${s.navLogo} d-flex a-center`}>
            <li className={s.item}>
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </li>
          </ul>

          <ul className={[s.navMenu, burger ? s.active : ''].join(' ')}>
            <li className={s.item}>
              <Link
                className={pathname === '/' ? s.active : ''}
                to='/'
                onClick={closeBurger}
              >
                {t('header.link1')}
              </Link>
            </li>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : undefined)}
                to='/shop'
                onClick={closeBurger}
              >
                {t('header.link2')}
              </NavLink>
            </li>
            <li className={s.item}>
              <Link
                className={pathname === '/brands' ? s.active : ''}
                to='/brands'
                onClick={closeBurger}
              >
                {t('header.link3')}
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={pathname === '/contacts' ? s.active : ''}
                to='/contacts'
                onClick={closeBurger}
              >
                {t('header.link4')}
              </Link>
            </li>
          </ul>

          <ul className={`d-flex a-center`}>
            <li className={s.item}>
              <button
                className={[
                  s.navBtn,
                  i18n.language === 'ru' ? s.active : '',
                ].join(' ')}
                onClick={() => changeLanguage('ru')}
              >
                ru
              </button>
              <button
                className={[
                  s.navBtn,
                  i18n.language === 'en' ? s.active : '',
                ].join(' ')}
                onClick={() => changeLanguage('en')}
              >
                en
              </button>
            </li>
            <li className={s.item}>
              <Link to='cart' onClick={closeBurger}>
                <BsHandbag className={s.draw} />
              </Link>
            </li>
          </ul>
        </nav>
        {/* NAVIGATION END */}

        <div
          onClick={burgerHandler}
          className={[s.burger, burger ? s.active : ''].join(' ')}
        >
          <span className={s.burgerLine}></span>
        </div>
      </div>
    </header>
  )
}
