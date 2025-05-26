
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import styles from '../ProductionItem.module.scss';
import heroImage from "@/assets/images/Production/product-2/hero.png";
import ImageSlider from "@/components/ImageSlider/ImageSlider.tsx";
import {Button} from "@/components/ui/Button/Button.tsx";
import DownloadIcon from '@/assets/icons/download.svg?react';


import sliderImage1 from "@/assets/images/Production/product-2/slide-1.jpg";
import sliderImage2 from "@/assets/images/Production/product-2/slide-2.jpg";
import sliderImage3 from "@/assets/images/Production/product-2/slide-3.jpg";
import sliderImage4 from "@/assets/images/Production/product-2/slide-4.jpg";
import sliderImage5 from "@/assets/images/Production/product-2/slide-5.jpg";
import sliderImage6 from "@/assets/images/Production/product-2/slide-6.jpg";

const ProductionItem2 = () => {
  const {t} = useTranslation();
  const sliderImages = [
    sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6
  ]

  const downloadLink = "/downloads/FRP-Basalt-Mesh-2024.pdf";

  return (

    <main>
      <PageHeader
        title={t("production.page_header.title")}
        breadcrumbs={[
          {label: t("production.page_header.breadcrumbs.1"), link: "/"},
          {label: t("production.page_header.breadcrumbs.2"), link: "/products"},
          {label: t("production.page_header.breadcrumbs.3"), link: "/products/production"},
        ]}
      />
      <section className={styles.product}>
        <div className={`${styles.productContainer} container`}>
          <div className={styles.productInner}>
            <div className={styles.productImage}>
              <img src={heroImage} alt="product"/>
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productInfoBlock}>
                <h3 className={styles.productInfoBlockTitle}>{t("production.products.2.info.block_1.title")}</h3>
                <p className={styles.productInfoBlockText}>{t("production.products.2.info.block_1.text_1")}</p>
                <p className={styles.productInfoBlockText}>{t("production.products.2.info.block_1.text_2")}</p>
                <p className={styles.productInfoBlockText}>{t("production.products.2.info.block_1.text_3")}</p>
              </div>

              <div className={styles.productInfoBlock}>
                <h3 className={styles.productInfoBlockTitle}>{t("production.products.2.info.block_2.title")}</h3>
                <ul>
                  <li>{t("production.products.2.info.block_2.text_1")}</li>
                  <li>{t("production.products.2.info.block_2.text_2")}</li>
                  <li>{t("production.products.2.info.block_2.text_3")}</li>
                  <li>{t("production.products.2.info.block_2.text_4")}</li>
                  <li>{t("production.products.2.info.block_2.text_5")}</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.productTitle}>{t("production.products.2.title_1")}</h3>
            <div className={styles.productSubtitle}>{t("production.products.2.subtitle_1")}</div>
            <table className={styles.productTable}>
              <tbody>
              <tr>
                <td>{t("production.products.2.table_1.row_1.cell_1")}</td>
                <td>{t("production.products.2.table_1.row_1.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_1.row_2.cell_1")}</td>
                <td>{t("production.products.2.table_1.row_2.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_1.row_3.cell_1")}</td>
                <td>{t("production.products.2.table_1.row_3.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_1.row_4.cell_1")}</td>
                <td>{t("production.products.2.table_1.row_4.cell_2")}</td>
              </tr>
              </tbody>
            </table>

            <h3 className={styles.productTitle}>{t("production.products.2.title_2")}</h3>
            <div className={styles.productSubtitle}>{t("production.products.2.subtitle_2")}</div>
            <table className={styles.productTable}>
              <tbody>
              <tr>
                <td>{t("production.products.2.table_2.row_1.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_1.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_2.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_2.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_3.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_3.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_4.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_4.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_5.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_5.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_6.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_6.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_7.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_7.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_2.row_8.cell_1")}</td>
                <td>{t("production.products.2.table_2.row_8.cell_2")}</td>
              </tr>
              </tbody>
            </table>

            <div className={styles.productSubtitle}>{t("production.products.2.subtitle_3")}</div>
            <table className={styles.productTable}>
              <tbody>
              <tr>
                <td>{t("production.products.2.table_3.row_1.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_1.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_2.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_2.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_3.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_3.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_4.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_4.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_5.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_5.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_6.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_6.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_7.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_7.cell_2")}</td>
              </tr>
              <tr>
                <td>{t("production.products.2.table_3.row_8.cell_1")}</td>
                <td>{t("production.products.2.table_3.row_8.cell_2")}</td>
              </tr>
              </tbody>
            </table>
            <p className={styles.productText}>{t("production.products.2.text_1")}</p>
            <ImageSlider images={sliderImages}/>
            <Button className={styles.productDownloadButton} asChild={true} variant="withIcon">
              <a href={downloadLink} download>
                <DownloadIcon/>
                {t('buttons.download_presentation')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>

  );
};

export default ProductionItem2;
