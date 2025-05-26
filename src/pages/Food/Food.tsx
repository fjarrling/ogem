import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import styles from "./Food.module.scss";
import {useTranslation} from "react-i18next";

import foodImage1 from '@/assets/images/food/food-1.png';
import foodImage2 from '@/assets/images/food/food-2.png';
import foodImage3 from '@/assets/images/food/food-3.png';
import foodImage4 from '@/assets/images/food/food-4.png';

export default function Food() {
  const {t} = useTranslation();

  return (
    <main>
      <PageHeader
        title={t('food.page_header.title')}
        breadcrumbs={[
          {
            label: `${t('food.page_header.breadcrumbs.1')}`,
            link: '/'
          },
          {
            label: `${t('food.page_header.breadcrumbs.2')}`,
            link: '/products'
          },
          {
            label: `${t('food.page_header.breadcrumbs.3')}`,
            link: '/products/food-and-agriculture'
          }
        ]}
      />
      <section className={styles.food}>
        <div className={`${styles.foodContainer} container`}>
          <div className={styles.foodInner}>
            <div className={styles.foodBlock}>
              <div className={styles.foodBlockImage}>
                <img src={foodImage1} alt=""/>
              </div>
              <div className={styles.foodBlockBody}>
                <h2 className={styles.foodBlockTitle}>
                  {t('food.introduction.title')}
                </h2>
                <p className={styles.foodBlockText}>
                  {t('food.introduction.text_1')}
                </p>
                <h3 className={styles.foodBlockSubtitle}>
                  {t('food.introduction.subtitle_1')}
                </h3>
                <ol>
                  <li>
                    {t('food.introduction.list_1.title')}
                    <ul>
                      <li>
                        {t('food.introduction.list_1.text_1')}
                      </li>
                      <li>
                        {t('food.introduction.list_1.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.introduction.list_2.title')}
                    <ul>
                      <li>
                        {t('food.introduction.list_2.text_1')}
                      </li>
                      <li>
                        {t('food.introduction.list_2.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.introduction.list_3.title')}
                    <ul>
                      <li>
                        {t('food.introduction.list_3.text_1')}
                      </li>
                      <li>
                        {t('food.introduction.list_3.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.introduction.list_4.title')}
                    <ul>
                      <li>
                        {t('food.introduction.list_4.text_1')}
                      </li>
                      <li>
                        {t('food.introduction.list_4.text_2')}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className={styles.foodBlock}>
              <div className={styles.foodBlockImage}>
                <img src={foodImage2} alt=""/>
              </div>
              <div className={styles.foodBlockBody}>
                <h2 className={styles.foodBlockTitle}>
                  {t('food.advantages.title')}
                </h2>
                <ol>
                  <li>
                    {t('food.advantages.list_1.title')}
                    <ul>
                      <li>
                        {t('food.advantages.list_1.text')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.advantages.list_2.title')}
                    <ul>
                      <li>
                        {t('food.advantages.list_2.text')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.advantages.list_3.title')}
                    <ul>
                      <li>
                        {t('food.advantages.list_3.text')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.advantages.list_4.title')}
                    <ul>
                      <li>
                        {t('food.advantages.list_4.text_1')}
                      </li>
                      <li>
                        {t('food.advantages.list_4.text_2')}
                      </li>
                    </ul>
                  </li>
                </ol>
                <h3 className={styles.foodBlockSubtitle}>
                  {t('food.advantages.ecosystem.title')}
                </h3>
                <ol>
                  <li>
                    {t('food.advantages.ecosystem.list_1.title')}
                    <ul>
                      <li>
                        {t('food.advantages.ecosystem.list_1.text_1')}
                      </li>
                      <li>
                        {t('food.advantages.ecosystem.list_1.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.advantages.ecosystem.list_2.title')}
                    <ul>
                      <li>
                        {t('food.advantages.ecosystem.list_2.text_1')}
                      </li>
                      <li>
                        {t('food.advantages.ecosystem.list_2.text_2')}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className={styles.foodBlock}>
              <div className={styles.foodBlockImage}>
                <img src={foodImage3} alt=""/>
              </div>
              <div className={styles.foodBlockBody}>
                <h2 className={styles.foodBlockTitle}>
                  {t('food.market.title')}
                </h2>
                <ol>
                  <li>
                    {t('food.market.list_1.title')}
                    <ul>
                      <li>
                        {t('food.market.list_1.text_1')}
                      </li>
                      <li>
                        {t('food.market.list_1.text_2')}
                      </li>
                      <li>
                        {t('food.market.list_1.text_3')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.market.list_2.title')}
                    <ul>
                      <li>
                        {t('food.market.list_2.text_1')}
                      </li>
                      <li>
                        {t('food.market.list_2.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.market.list_3.title')}
                    <ul>
                      <li>
                        {t('food.market.list_3.text_1')}
                      </li>
                      <li>
                        {t('food.market.list_3.text_2')}
                      </li>
                    </ul>
                  </li>
                </ol>
                <h3 className={styles.foodBlockSubtitle}>
                  {t('food.market.analysis.title')}
                </h3>
                <ol>
                  <li>
                    {t('food.market.analysis.list_1.title')}
                    <ul>
                      <li>
                        {t('food.market.analysis.list_1.text_1')}
                      </li>
                      <li>
                        {t('food.market.analysis.list_1.text_2')}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {t('food.market.analysis.list_2.title')}
                    <ul>
                      <li>
                        {t('food.market.analysis.list_2.text_1')}
                      </li>
                      <li>
                        {t('food.market.analysis.list_2.text_2')}
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className={styles.foodBlock}>
              <div className={styles.foodBlockImage}>
                <img src={foodImage4} alt=""/>
              </div>
              <div className={styles.foodBlockBody}>
                <h2 className={styles.foodBlockTitle}>
                  {t('food.conclusion.title')}
                </h2>
                <p className={styles.foodBlockText}>
                  {t('food.conclusion.text')}
                </p>
                <h3 className={styles.foodBlockSubtitle}>
                  {t('food.conclusion.subtitle_1.title')}
                </h3>
                <ol className={styles.difflist}>
                  <li>{t('food.conclusion.subtitle_1.text_1')}</li>
                  <li>{t('food.conclusion.subtitle_1.text_2')}</li>
                  <li>{t('food.conclusion.subtitle_1.text_3')}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}