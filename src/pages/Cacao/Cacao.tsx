import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import styles from "./Cacao.module.scss";
import {useTranslation} from "react-i18next";
import cacaoImage from "@/assets/images/cacao/cacao.png"

export default function Cacao() {
  const {t} = useTranslation();
  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('cacao.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('cacao.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('cacao.page_header.breadcrumbs.2')}`,
              link: '/products'
            },
            {
              label: `${t('cacao.page_header.breadcrumbs.3')}`,
              link: '/products/cacao-beans'
            }
          ]}
        />
        <section className={styles.cacao}>
          <div className={`${styles.cacaoContainer} container`}>
            <div className={styles.cacaoInner}>
              <div className={styles.cacaoBlock}>
                <h3 className={styles.cacaoBlockTitle}>
                  {t('cacao.blocks.1.title')}
                </h3>
                <p className={styles.cacaoBlockText}>
                  {t('cacao.blocks.1.text')}
                </p>
              </div>
              <div className={styles.cacaoBody}>
                <div className={styles.cacaoColumn}>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.2.title')}
                    </h3>
                    <ol className={styles.cacaoOl}>
                      <li>
                        {t('cacao.blocks.2.item_1.title')}
                        <ul>
                          <li>{t('cacao.blocks.2.item_1.text_1')}</li>
                          <li>{t('cacao.blocks.2.item_1.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.2.item_2.title')}
                        <ul>
                          <li>{t('cacao.blocks.2.item_2.text_1')}</li>
                          <li>{t('cacao.blocks.2.item_2.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.2.item_3.title')}
                        <ul>
                          <li>{t('cacao.blocks.2.item_3.text_1')}</li>
                          <li>{t('cacao.blocks.2.item_3.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.2.item_4.title')}
                        <ul>
                          <li>{t('cacao.blocks.2.item_4.text_1')}</li>
                          <li>{t('cacao.blocks.2.item_4.text_2')}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.3.title')}
                    </h3>
                    <ol className={styles.cacaoOl}>
                      <li>
                        {t('cacao.blocks.3.item_1.title')}
                        <ul>
                          <li>{t('cacao.blocks.3.item_1.text_1')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.3.item_2.title')}
                        <ul>
                          <li>{t('cacao.blocks.3.item_2.text_1')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.3.item_3.title')}
                        <ul>
                          <li>{t('cacao.blocks.3.item_3.text_1')}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.4.title')}
                    </h3>
                    <ol className={styles.cacaoOl}>
                      <li>
                        {t('cacao.blocks.4.item_1.title')}
                        <ul>
                          <li>{t('cacao.blocks.4.item_1.text_1')}</li>
                          <li>{t('cacao.blocks.4.item_1.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.4.item_2.title')}
                        <ul>
                          <li>{t('cacao.blocks.4.item_2.text_1')}</li>
                          <li>{t('cacao.blocks.4.item_2.text_2')}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className={styles.cacaoColumn}>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.5.title')}
                    </h3>
                    <ol className={styles.cacaoOl}>
                      <li>
                        {t('cacao.blocks.5.item_1.title')}
                        <ul>
                          <li>{t('cacao.blocks.5.item_1.text_1')}</li>
                          <li>{t('cacao.blocks.5.item_1.text_2')}</li>
                          <li>{t('cacao.blocks.5.item_1.text_3')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.5.item_2.title')}
                        <ul>
                          <li>{t('cacao.blocks.5.item_2.text_1')}</li>
                          <li>{t('cacao.blocks.5.item_2.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.5.item_3.title')}
                        <ul>
                          <li>{t('cacao.blocks.5.item_3.text_1')}</li>
                          <li>{t('cacao.blocks.5.item_3.text_2')}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.6.title')}
                    </h3>
                    <ol className={styles.cacaoOl}>
                      <li>
                        {t('cacao.blocks.6.item_1.title')}
                        <ul>
                          <li>{t('cacao.blocks.6.item_1.text_1')}</li>
                          <li>{t('cacao.blocks.6.item_1.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.6.item_2.title')}
                        <ul>
                          <li>{t('cacao.blocks.6.item_2.text_1')}</li>
                          <li>{t('cacao.blocks.6.item_2.text_2')}</li>
                        </ul>
                      </li>
                      <li>
                        {t('cacao.blocks.6.item_3.title')}
                        <ul>
                          <li>{t('cacao.blocks.6.item_3.text_1')}</li>
                          <li>{t('cacao.blocks.6.item_3.text_2')}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className={styles.cacaoBlock}>
                    <h3 className={styles.cacaoBlockTitle}>
                      {t('cacao.blocks.4.title')}
                    </h3>
                    <p className={styles.cacaoBlockText}>
                      {t('cacao.blocks.7.text')}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.cacaoImage}>
                <img src={cacaoImage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}