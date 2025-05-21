import styles from './Service.module.scss';
import {Button} from "@/components/ui/Button/Button.tsx";
import {useMediaQuery} from "@/hooks";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import ArrowLeft from '@/assets/icons/arrow-left.svg?react';
import ArrowRight from '@/assets/icons/arrow-right.svg?react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

import serviceIcon1 from '@/assets/icons/service-item-1.svg'
import serviceIcon2 from '@/assets/icons/service-item-2.svg'
import serviceIcon3 from '@/assets/icons/service-item-3.svg'

type ServiceItem = {
  icon: string;
  key: string;
};

const Service = () => {
  const {t} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const setviceList: ServiceItem[] = [
    {icon: serviceIcon1, key: 'quality'},
    {icon: serviceIcon2, key: 'responsibility'},
    {icon: serviceIcon3, key: 'operation'}
  ]

  return (
    <section className={styles.service}>
      <div className={`${styles.serviceContainer} container`}>
        <div className={styles.serviceInner}>
          <h2 className={styles.serviceTitle}>{t('home.service.title')}</h2>
          <div className={styles.serviceSubtitle}>{t('home.service.subtitle')}</div>

          {isMobile ? (
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: `.${styles.serviceNavigationButtonPrev}`,
                prevEl: `.${styles.serviceNavigationButtonNext}`,
              }}
              spaceBetween={20}
              slidesPerView={1}
              className={styles.serviceList}
            >
              {setviceList.map((item, i) => (
                <SwiperSlide key={i} className={styles.serviceItem}>
                  <img className={styles.serviceItemImage} src={item.icon}
                       alt={t(`home.service.items.${item.key}.title`)}/>
                  <h3 className={styles.serviceItemTitle}>{t(`home.service.items.${item.key}.title`)}</h3>
                  <p className={styles.serviceItemText}>{t(`home.service.items.${item.key}.text`)}</p>
                </SwiperSlide>
              ))}
              <div className={styles.serviceNavigation}>
                <button className={`${styles.serviceNavigationButton}  ${styles.serviceNavigationButtonPrev}`}>
                  <ArrowLeft/>
                </button>
                <button className={`${styles.serviceNavigationButton}  ${styles.serviceNavigationButtonNext}`}>
                  <ArrowRight/>
                </button>
              </div>
            </Swiper>
          ) : (
            <ul className={styles.serviceList}>
              {setviceList.map((item, i) => (
                <li key={i} className={styles.serviceItem}>
                  <img className={styles.serviceItemImage} src={item.icon}
                       alt={t(`home.service.items.${item.key}.title`)}/>
                  <h3 className={styles.serviceItemTitle}>{t(`home.service.items.${item.key}.title`)}</h3>
                  <p className={styles.serviceItemText}>{t(`home.service.items.${item.key}.text`)}</p>
                </li>
              ))}
            </ul>
          )}
          <Button variant={'red'} asChild>
            <NavLink
              to={'/contact'}
            >
              {t('buttons.cooperation')}
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Service;
