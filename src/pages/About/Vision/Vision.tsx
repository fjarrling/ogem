import styles from './Vision.module.scss'
import {useTranslation} from "react-i18next";
import vision from '@/assets/images/about/vision-image.png'

const Vision = () => {
  const {t} = useTranslation();
  return (
    <section className={styles.vision}>
      <div className={`${styles.visionContainer} container`}>
        <div className={styles.visionInner}>
          <div className={styles.visionBody}>
            <h3 className={styles.visionTitle}>{t('about.vision.title')}</h3>
            <p className={styles.visionText}>
              {t('about.vision.text')}
            </p>
          </div>
          <div className={styles.visionImage}>
            <img src={vision} alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;