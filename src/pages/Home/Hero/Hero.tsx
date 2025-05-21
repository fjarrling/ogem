import styles from './Hero.module.scss'
import {Button} from "@/components/ui/Button/Button.tsx";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

const Hero = () => {
  const {t} = useTranslation();
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroInner}>
          <div className={styles.heroSubtitle}>
            {t('home.hero.subtitle')}
          </div>
          <div className={styles.heroTitle}>
            {t('home.hero.title')}
          </div>
          <div className={styles.heroText}>
            {t('home.hero.text')}
          </div>
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

export default Hero;