import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import styles from "./Products.module.scss";
import {Button} from "@/components/ui/Button/Button.tsx";
import {NavLink, To} from "react-router-dom";

import productImage1 from '@/assets/images/products/products-1.png'
import productImage2 from '@/assets/images/products/products-2.png'
import productImage3 from '@/assets/images/products/products-3.png'
import productImage4 from '@/assets/images/products/products-4.png'
import productImage5 from '@/assets/images/products/products-5.png'
import productImage6 from '@/assets/images/products/products-6.png'

interface Products {
  image: string;
  key: string;
  to: To;
}

export default function About() {
  const {t} = useTranslation();

  const products: Products[] = [
    {
      image: productImage1,
      key: "cacao",
      to: '/products/cacao-beans',
    },
    {
      image: productImage2,
      key: "energy",
      to: '/products/energy',
    },
    {
      image: productImage3,
      key: "commodities",
      to: '/products/commodities',
    },
    {
      image: productImage4,
      key: "food",
      to: '/products/food-and-agriculture',
    },
    {
      image: productImage5,
      key: "construction",
      to: '/products/construction-equipment',
    },
    {
      image: productImage6,
      key: "production",
      to: '/products/production-equipment',
    },
  ]

  return (
    <>
      <Header/>
      <main>
        <PageHeader
          title={t('products.page_header.title')}
          breadcrumbs={[
            {
              label: `${t('products.page_header.breadcrumbs.1')}`,
              link: '/'
            },
            {
              label: `${t('products.page_header.breadcrumbs.2')}`,
              link: '/products'
            }
          ]}
        />
        <section className={styles.products}>
          <div className={`${styles.productsContainer} container`}>
            <div className={styles.productsInner}>
              <ul className={styles.productsList}>
                {
                  products.map((product, index) => {
                    return (
                      <li key={index} className={styles.productsItem}>
                        <img className={styles.productsItemImage}
                             src={product.image}
                             alt=""
                        />
                        <div className={styles.productsItemBody}>
                          <h3 className={styles.productsItemTitle}>{t(`products.${product.key}.title`)}</h3>
                          <p className={styles.productsItemText}>{t(`products.${product.key}.text`)}</p>
                          <Button className={styles.productsItemButton} variant="transparent" asChild>
                            <NavLink
                              to={product.to}
                            >
                              {t('buttons.read_more')}

                            </NavLink>
                          </Button>
                        </div>
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