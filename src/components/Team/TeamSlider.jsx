import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'

import s from './Team.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiper.scss'

import TeamSlider1 from '../../assets/image/team/team.png'
import TeamSlider2 from '../../assets/image/team/team2.png'
import TeamSlider3 from '../../assets/image/team/team3.png'

export const TeamSlider = () => {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        cssMode={true}
        navigation={true}
        loop={true}
        autoPlay={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        speed={3000}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className={s.content}>
            <img
              className={s.sliderImg}
              alt='img'
              src={TeamSlider1}
              effect='blur'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className={s.sliderImg}
              alt='img'
              src={TeamSlider2}
              effect='blur'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className={s.sliderImg}
              alt='img'
              src={TeamSlider3}
              effect='blur'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
