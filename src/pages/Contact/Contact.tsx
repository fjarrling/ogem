import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import styles from "./Contact.module.scss";
import ContactForm from "@/components/ContactForm/ContactForm.tsx";
import emailIcon from "@/assets/icons/mail.svg";
import calendarIcon from "@/assets/icons/calendar.svg";
import {Trans, useTranslation} from "react-i18next";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";

export default function NotFound() {
  const {t} = useTranslation();


  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('contact.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('contact.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('contact.page_header.breadcrumbs.2')}`,
              link: '/contact'
            }
          ]}
        />
        <div className={styles.contact}>
          <div className={`${styles.contactContainer} container`}>
            <div className={styles.contactInner}>
              <div className={styles.contactFormWrapper}>
                <h2 className={styles.contactFormTitle}>
                  {t('contact.form.title')}
                </h2>
                <div className={styles.contactFormSubtitle}>
                  {t('contact.form.subtitle')}
                </div>
                <ContactForm/>
              </div>
              <div className={styles.contactInfo}>
                <h3 className={styles.contactInfoTitle}>
                  {t('contact.info.title')}
                </h3>
                <div className={styles.contactInfoSubTitle}>
                  {t('contact.info.subtitle')}
                </div>
                <div className={styles.contactInfoBlock}>
                  <img className={styles.contactInfoBlockIcon} src={emailIcon} alt="email icon"/>
                  <div className={styles.contactInfoBlockTitle}>
                    {t('emails.support')}
                  </div>
                  <p className={styles.contactInfoBlockText}>
                    {t('contact.info.block_1.text')}
                  </p>
                </div>
                <div className={styles.contactInfoBlock}>
                  <img className={styles.contactInfoBlockIcon} src={calendarIcon} alt="email icon"/>
                  <div className={styles.contactInfoBlockTitle}>
                    {t('contact.info.block_2.title')}
                  </div>
                  <p className={styles.contactInfoBlockText}>
                    <Trans i18nKey="contact.info.block_2.text" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}