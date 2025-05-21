import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import Hero from "./Hero/Hero"
import Vision from "@/pages/About/Vision/Vision.tsx";
import Partners from "@/pages/About/Partners/Partners.tsx";

export default function About() {
  const {t} = useTranslation();
  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('about.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('about.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('about.page_header.breadcrumbs.2')}`,
              link: '/about'
            }
          ]}
        />
        <Hero/>
        <Vision/>
        <Partners/>
      </main>
      <Footer/>
    </>
  )
}