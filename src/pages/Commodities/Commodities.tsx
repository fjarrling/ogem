import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import styles from "./Commodities.module.scss";
import {useTranslation} from "react-i18next";
import commoditiesImage from "@/assets/images/commodities/commodities.png"

interface Block {
  title: string;
  text: string;
}

export default function Commodities() {
  const {t} = useTranslation();

  const blocks: Block[] = [
    {
      title: t('commodities.blocks.1.title'),
      text: t('commodities.blocks.1.text'),
    }
  ]

  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('commodities.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('commodities.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('commodities.page_header.breadcrumbs.2')}`,
              link: '/products'
            },
            {
              label: `${t('commodities.page_header.breadcrumbs.3')}`,
              link: '/products/commodities'
            }
          ]}
        />
        <section className={styles.commodities}>
          <div className={`${styles.commoditiesContainer} container`}>
            <div className={styles.commoditiesInner}>
              <div className={styles.commoditiesBody}>

                {blocks.map((block, index) => {
                  return (
                    <div key={index} className={styles.commoditiesBlock}>
                      <h3 className={styles.commoditiesBlockTitle}>
                        {block.title}
                      </h3>
                      <p className={styles.commoditiesBlockText}>
                        {block.text}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div className={styles.commoditiesImage}>
                <img src={commoditiesImage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}