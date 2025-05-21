import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import styles from "./Construction.module.scss";
import {useTranslation} from "react-i18next";
import constructionImage from "@/assets/images/Construction/construction.png"

export default function Construction() {
  const {t} = useTranslation();
  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('construction.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('construction.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('construction.page_header.breadcrumbs.2')}`,
              link: '/products'
            },
            {
              label: `${t('construction.page_header.breadcrumbs.3')}`,
              link: '/products/construction-equipment'
            }
          ]}
        />
        <section className={styles.construction}>
          <div className={`${styles.constructionContainer} container`}>
            <div className={styles.constructionInner}>
              <div className={styles.constructionBlock}>
                <p className={styles.constructionBlockText}>
                  {t('construction.text')}
                </p>
              </div>
              <div className={styles.constructionImage}>
                <img src={constructionImage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}