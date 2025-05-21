import styles from "./Partners.module.scss"
import {useTranslation} from "react-i18next";

import partnersImage1 from '@/assets/images/partners/partners-1.png';
import partnersImage2 from '@/assets/images/partners/partners-2.png';
import partnersImage3 from '@/assets/images/partners/partners-3.png';
import partnersImage4 from '@/assets/images/partners/partners-4.png';
import partnersImage5 from '@/assets/images/partners/partners-5.png';

type Partner =
  | { type: 'image'; logo: string }
  | { type: 'text'; label: string };

const Partners = () => {
  const {t} = useTranslation();

  const partners: Partner[] = [
    {type: 'image', logo: partnersImage1},
    {type: 'image', logo: partnersImage2},
    {type: 'image', logo: partnersImage3},
    {type: 'image', logo: partnersImage4},
    {type: 'image', logo: partnersImage5},
    {type: 'text', label: "Allianz Energy Bulgaria LLC (Bulgaria)"},
    {type: 'text', label: "DELTA OIL GROUP LLC (Ukraine)"},
  ];

  return (
    <section className={styles.partners}>
      <div className={`${styles.partnersContainer} container`}>
        <div className={styles.partnersInner}>
          <h3 className={styles.partnersTitle}>
            {t('about.partners.title')}
          </h3>
          <ul className={styles.partnersList}>
            {partners.map((partner, index) => {
              if (partner.type === 'image') {
                return (
                  <li key={index} className={styles.partnersItem}>
                    <img src={partner.logo} alt={`Partner ${index + 1}`}/>
                  </li>
                );
              }

              if (partner.type === 'text') {
                return (
                  <li key={index} className={styles.partnersItem}>
                    <span>{partner.label}</span>
                  </li>
                );
              }

              return null; // fallback для защиты
            })}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Partners;