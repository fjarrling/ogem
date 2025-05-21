import styles from './Focus.module.scss'
import {Button} from "@/components/ui/Button/Button.tsx";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

import focusImage1 from '@/assets/icons/focus-item-1.svg'
import focusImage2 from '@/assets/icons/focus-item-2.svg'
import focusImage3 from '@/assets/icons/focus-item-3.svg'

type FocusItem = {
  icon: string;
  text: string;
};

const Focus = () => {
  const {t} = useTranslation();
  const focusItems: FocusItem[] = [
    {
      icon: focusImage1,
      text: 'home.focus.items.1',
    },
    {
      icon: focusImage2,
      text: 'home.focus.items.2',
    },
    {
      icon: focusImage3,
      text: 'home.focus.items.3',
    }
  ];

  return (
    <section className={styles.focus}>
      <div className={`${styles.focusContainer} container`}>
        <div className={styles.focusInner}>
          <h2 className={styles.focusTitle}>
            {t('home.focus.title')}
          </h2>
          <ul className={styles.focusList}>
            {focusItems.map((item, index) => (
              <li className={styles.focusItem} key={index}>
                <img
                  className={styles.focusItemIcon}
                  src={item.icon}
                  alt={`Focus icon ${index + 1}`}
                />
                <p className={styles.focusItemText}>
                  {t(item.text)}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.focusText}>
            {t('home.focus.text')}
          </p>
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

export default Focus;