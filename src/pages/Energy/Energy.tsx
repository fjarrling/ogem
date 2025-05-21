import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import styles from "./Energy.module.scss";
import {useTranslation} from "react-i18next";
import energyImage from "@/assets/images/energy/energy.png"

interface Block {
  title: string;
  text: string[];
}


export default function About() {
  const {t} = useTranslation();

  const blocks: Block[] = [
    {
      title: t('energy.blocks.1.title'),
      text: [
        t('energy.blocks.1.text.1'),
        t('energy.blocks.1.text.2')
      ]
    },
    {
      title: t('energy.blocks.2.title'),
      text: [
        t('energy.blocks.2.text.1')
      ]
    },
    {
      title: t('energy.blocks.3.title'),
      text: [
        t('energy.blocks.3.text.1')
      ]
    }
  ]

  return (

    <>
      <Header/>
      <main>
        <PageHeader
          title={t('energy.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('energy.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('energy.page_header.breadcrumbs.2')}`,
              link: '/products'
            },
            {
              label: `${t('energy.page_header.breadcrumbs.3')}`,
              link: '/products/energy'
            }
          ]}
        />
        <section className={styles.energy}>
          <div className={`${styles.energyContainer} container`}>
            <div className={styles.energyInner}>
              <div className={styles.energyBody}>
                {
                  blocks.map((block, index) => {
                    return (
                      <div className={styles.energyBlock} key={index}>
                        <h3 className={styles.energyBlockTitle}>
                          {block.title}
                        </h3>
                        {block.text.map((text, index) => {
                          return (
                            <p className={styles.energyBlockText} key={index}>
                              {text}
                            </p>
                          )
                        })}
                      </div>
                    )
                  })
                }
              </div>
              <div className={styles.energyImage}>
                <img src={energyImage} alt=""/>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}