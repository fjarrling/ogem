import styles from './Articles.module.scss'
import {NavLink, To} from "react-router-dom";
import {Button} from "@/components/ui/Button/Button.tsx";
import {useMediaQuery} from "@/hooks";
import {useTranslation} from "react-i18next";

import articleImage1 from '@/assets/images/articles/article-1.png'
import articleImage2 from '@/assets/images/articles/article-2.png'
import articleImage3 from '@/assets/images/articles/article-3.png'
import articleImage4 from '@/assets/images/articles/article-4.png'
import articleImage5 from '@/assets/images/articles/article-5.png'
import articleContentImage from '@/assets/images/articles/article-2-content.png'

type ArticleType = 'article' | 'image';
type Direction = 'normal' | 'reversed';

interface BaseArticleItem {
  image: string;
  type: ArticleType;
}

interface TextArticleMeta extends BaseArticleItem {
  type: 'article';
  key: string; // ключ для перевода
  to: To;
  direction: Direction;
}

interface ImageArticleItem extends BaseArticleItem {
  type: 'image';
  content: string;
}

type ArticleItem = TextArticleMeta | ImageArticleItem;

const Articles = () => {
  const {t} = useTranslation();
  const isDesktop = useMediaQuery('(max-width: 1439px)');

  const articles: ArticleItem[] = [
    {
      type: 'article',
      key: 'about',
      image: articleImage1,
      to: '/about',
      direction: 'normal'
    },
    {
      type: 'image',
      image: articleImage2,
      content: articleContentImage
    },
    {
      type: 'article',
      key: 'products',
      image: articleImage3,
      to: '/products',
      direction: 'normal'
    },
    {
      type: 'article',
      key: 'energy',
      image: articleImage4,
      to: '/products/energy',
      direction: 'reversed'
    },
    {
      type: 'article',
      key: 'commodities',
      image: articleImage5,
      to: '/products/commodities',
      direction: 'normal'
    }
  ];

  return (
    <section className={styles.articles}>
      <ul className={styles.articlesList}>
        {articles.map((item, i) => {
          if (item.type === 'article') {
            const isLastItem = i === articles.length - 1;
            const title = t(`home.articles.${item.key}.title`);
            const textArray = t(`home.articles.${item.key}.text`, {returnObjects: true}) as string[];

            return (
              <li className={styles.articlesItem} key={i}>
                <div className={`${styles.articlesItemContainer} container container--large`}>
                  <div
                    className={`${styles.articlesItemInner} ${
                      item.direction === 'reversed' ? styles.articlesItemInnerReversed : ''
                    }`}
                  >
                    <div className={styles.articlesItemBody}>
                      <h3 className={styles.articlesItemTitle}>{title}</h3>

                      {textArray.map((paragraph, j) => (
                        <p className={styles.articlesItemText} key={j}>
                          {paragraph}
                        </p>
                      ))}

                      <Button className={styles.articlesItemButton} asChild variant="transparent">
                        <NavLink to={item.to}>{t("buttons.read_more")}</NavLink>
                      </Button>

                      {isDesktop && isLastItem && (
                        <Button className={styles.articlesButton} asChild variant="black">
                          <NavLink to="/products">{t("buttons.view_more")}</NavLink>
                        </Button>
                      )}
                    </div>

                    <div className={styles.articlesItemImage}>
                      <img src={item.image} alt=""/>
                    </div>
                  </div>
                </div>
              </li>
            );
          }

          if (item.type === 'image') {
            return (
              <li className={styles.articlesItem} key={i}>
                <div className={`container container--large ${styles.articlesItemContainer}`}>
                  <div className={styles.articlesItemContent}>
                    <div className={styles.articlesItemContentImage}>
                      <img src={item.content} alt=""/>
                    </div>
                    <div className={styles.articlesItemImage}>
                      <img src={item.image} alt=""/>
                    </div>
                  </div>
                </div>
              </li>
            );
          }

          return null;
        })}
      </ul>

      {!isDesktop && (
        <Button className={styles.articlesButton} asChild variant="black">
          <NavLink to="/products">{t("buttons.view_more")}</NavLink>
        </Button>
      )}
    </section>
  );
};

export default Articles;
