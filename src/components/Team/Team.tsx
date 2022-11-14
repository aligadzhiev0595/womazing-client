import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TeamSlider } from './TeamSlider'

import s from './Team.module.scss'

export const Team = () => {
  const { t } = useTranslation()
  return (
    <section className={s.team}>
      <div className='container'>
        <h2 className={s.title}>{t('team.title')}</h2>
        <div className={`${s.row} row`}>
          <div className='col col-7 col-md-12'>
            <div className={s.wrapperSlider}>
              <TeamSlider />
            </div>
          </div>
          <div className='col col-1 col-md-0'></div>
          <div className='col col-4 col-md-12'>
            <div className={s.wrapperText}>
              <p className={s.desc}>{t('team.text')}</p>
              <p className={s.descInfo}>{t('team.info')}</p>
              <p className={s.descInfo}>{t('team.info1')}</p>
              <Link to='brands' className={s.link}>
                {t('team.more')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
