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
          <p className={styles.heroText}>
            {t('about.hero.text_1')}
          </p>
          <p className={styles.heroText}>
            {t('about.hero.text_2')}
          </p>
          <p className={styles.heroText}>
            {t('about.hero.text_3')}
          </p>
          <p className={styles.heroText}>
            {t('about.hero.text_4')}
          </p>
          <Button variant={'red'} className={styles.heroButton} asChild>
            <NavLink
              to="/contact"
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