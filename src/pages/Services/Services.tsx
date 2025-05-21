import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import styles from "./Services.module.scss";

import servicseIcon1 from '@/assets/icons/service-page-item-1.svg'
import servicseIcon2 from '@/assets/icons/service-page-item-2.svg'
import servicseIcon3 from '@/assets/icons/service-page-item-3.svg'

type ServicesItem = {
  icon: string;
  key: string;
};

export default function Services() {
  const {t} = useTranslation();

  const servicesList: ServicesItem[] = [
    {icon: servicseIcon1, key: '1'},
    {icon: servicseIcon2, key: '2'},
    {icon: servicseIcon3, key: '3'}
  ]

  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('services.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('services.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('services.page_header.breadcrumbs.2')}`,
              link: '/services'
            }
          ]}
        />
        <section className={styles.services}>
          <div className={`${styles.servicesContainer} container`}>
            <div className={styles.servicesInner}>
              <ul className={styles.servicesList}>
                {
                  servicesList.map((item) => {
                    return (
                      <li className={styles.servicesItem} key={item.key}>
                        <img className={styles.servicesItemImage}
                             src={item.icon}
                             alt={t(`services.items.${item.key}.title`)}
                        />
                        <h3 className={styles.servicesItemTitle}>{t(`services.items.${item.key}.title`)}</h3>
                        <p className={styles.servicesItemText}>{t(`services.items.${item.key}.text`)}</p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}