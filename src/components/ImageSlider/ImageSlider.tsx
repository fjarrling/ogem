import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ImageSlider.module.scss';
import ArrowLeft from '@/assets/icons/slider-arrow-left.svg?react'
import ArrowRight from '@/assets/icons/slider-arrow-right.svg?react'

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({images}: ImageSliderProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={{
        nextEl: `.${styles.nextButton}`,
        prevEl: `.${styles.prevButton}`,
      }}
      loop={true}
      className={styles.slider}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={styles.sliderItem}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.sliderItemImage}
          />
        </SwiperSlide>
      ))}
      <div className={styles.sliderNavigation}>
        <button className={`${styles.sliderNavigationButton} ${styles.prevButton}`}>
          <ArrowLeft/>
        </button>
        <button className={`${styles.sliderNavigationButton} ${styles.nextButton}`}>
          <ArrowRight/>
        </button>
      </div>
    </Swiper>
  );
};

export default ImageSlider;