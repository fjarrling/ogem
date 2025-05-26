import styles from "./Production.module.scss";
import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/Button/Button.tsx";
import {NavLink, To} from "react-router-dom";

import productionImage1 from "@/assets/images/Production/item-1.png";
import productionImage2 from "@/assets/images/Production/item-2.png";
import productionImage3 from "@/assets/images/Production/item-3.png";

type ProductionItem = {
  key: string;
  image: string;
  to: To
}

type TranslatedProductionItem = {
  title: string;
  [key: string]: string;
};

const Production = () => {
  const {t} = useTranslation();

  const ProductionList: ProductionItem[] = [
    {
      key: "1",
      image: productionImage1,
      to: "/products/production-equipment/1"
    },
    {
      key: "2",
      image: productionImage2,
      to: "/products/production-equipment/2"
    },
    {
      key: "3",
      image: productionImage3,
      to: "/products/production-equipment/3"
    },
  ];


  return (

    <main>
      <PageHeader
        title={t("production.page_header.title")}
        breadcrumbs={[
          {
            label: `${t("production.page_header.breadcrumbs.1")}`,
            link: "/",
          },
          {
            label: `${t("production.page_header.breadcrumbs.2")}`,
            link: "/products",
          },
          {
            label: `${t("production.page_header.breadcrumbs.3")}`,
            link: "/products/production-equipment",
          },
        ]}
      />
      <section className={styles.production}>
        <div className={`${styles.productionContainer} container`}>
          <div className={styles.productionInner}>
            <div className={styles.productionList}>
              {ProductionList.map((item) => {
                const itemData = t(`production.items.${item.key}`, {
                  returnObjects: true,
                }) as TranslatedProductionItem;
                return (
                  <div key={item.key} className={styles.productionItem}>
                    <div className={styles.productionItemBody}>
                      <h3 className={styles.productionItemTitle}>
                        {itemData.title}
                      </h3>
                      {Object.keys(itemData)
                        .filter((key) => key.startsWith("text_"))
                        .map((textKey) => (
                          <p
                            key={textKey}
                            className={styles.productionItemText}
                          >
                            {itemData[textKey]}
                          </p>
                        ))}
                      <Button variant={"transparent"} className={styles.productionItemButton} asChild>
                        <NavLink
                          to={item.to}>
                          {t("buttons.read_more")}
                        </NavLink>
                      </Button>
                    </div>
                    <div className={styles.productionItemImage}>
                      <img
                        src={item.image}
                        alt={itemData.title}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>

  );
};

export default Production;