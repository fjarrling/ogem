import styles from './Info.module.scss'
import {useTranslation} from "react-i18next";

const Info = () => {
  const {t} = useTranslation();

  return (
    <section className={styles.info}>
      <div className={`${styles.infoContainer} container`}>
        <div className={styles.infoInner}>
          <h2 className={styles.infoTitle}>
            {t('home.info.title')}
          </h2>
          <p className={styles.infoText}>
            {t('home.info.text_1')}
          </p>
          <p className={styles.infoText}>
            {t('home.info.text_2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;