import PageHeader from "@/components/PageHeader/PageHeader.tsx";
import {useTranslation} from "react-i18next";
import styles from "./Policy.module.scss";
import Icon1 from '@/assets/icons/policy-data-1.svg?react';
import Icon2 from '@/assets/icons/policy-data-2.svg?react';
import Icon3 from '@/assets/icons/policy-data-3.svg?react';
import policyImage from '@/assets/images/policy/policy.png'


export default function Policy() {
  const {t} = useTranslation();
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');       // день с ведущим нулём
  const month = String(today.getMonth() + 1).padStart(2, '0'); // месяц с ведущим нулём (0–январь, поэтому +1)
  const year = today.getFullYear();

  const currentDate = `${month}.${day}.${year}`;
  return (
    <main>
      <PageHeader
        title={t('policy.page_header.title')}
        breadcrumbs={[
          {
            label: `${t('policy.page_header.breadcrumbs.1')}`,
            link: '/'
          },
          {
            label: `${t('policy.page_header.breadcrumbs.2')}`,
            link: '/about'
          }
        ]}
      />
      <div className={styles.policy}>
        <div className={`${styles.policyContainer} container`}>
          <div className={styles.policyInner}>
            <div className={styles.policyBody}>
              <div className={styles.policyBlock}>
                <h3>{t("policy.title")}</h3>
                <p>{t("policy.date_1", {date: currentDate})}</p>
                <p>{t("policy.date_2", {date: currentDate})}</p>
                <p>{t("policy.text_1")}</p>

                <h4>{t("policy.block_1.title")}</h4>
                <div className={styles.policyInfo}>
                  <ul className={styles.policyInfoList}>
                    <li className={styles.policyInfoItem}>
                      <Icon1/>
                      {t("policy.block_1.text_1")}
                    </li>
                    <li className={styles.policyInfoItem}>
                      <Icon2/>
                      {t("policy.block_1.text_2")}
                    </li>
                    <li className={styles.policyInfoItem}>
                      <Icon3/>
                      {t("policy.block_1.text_3")}
                    </li>
                  </ul>
                </div>
                <p>
                  {t("policy.block_1.text_2")}<br/>
                  {t("policy.block_1.text_3")}
                </p>

                <h4>{t("policy.block_2.title")}</h4>
                <p>{t("policy.block_2.text_1")}</p>
                <ul>
                  <li>{t("policy.block_2.list_1.item_1")}</li>
                  <li>{t("policy.block_2.list_1.item_2")}</li>
                  <li>{t("policy.block_2.list_1.item_3")}</li>
                  <li>{t("policy.block_2.list_1.item_4")}</li>
                  <li>{t("policy.block_2.list_1.item_5")}</li>
                </ul>
                <p>{t("policy.block_2.text_2")}</p>
                <ul>
                  <li>{t("policy.block_2.list_2.item_1")}</li>
                  <li>{t("policy.block_2.list_2.item_2")}</li>
                  <li>{t("policy.block_2.list_2.item_3")}</li>
                  <li>{t("policy.block_2.list_2.item_4")}</li>
                  <li>{t("policy.block_2.list_2.item_5")}</li>
                </ul>

                <h4>{t("policy.block_3.title")}</h4>
                <p>{t("policy.block_3.text_1")}</p>
                <ul>
                  <li>{t("policy.block_3.list.item_1")}</li>
                  <li>{t("policy.block_3.list.item_2")}</li>
                  <li>{t("policy.block_3.list.item_3")}</li>
                  <li>{t("policy.block_3.list.item_4")}</li>
                  <li>{t("policy.block_3.list.item_5")}</li>
                </ul>

                <h4>{t("policy.block_4.title")}</h4>
                <p>{t("policy.block_4.text_1")}</p>

                <h4>{t("policy.block_5.title")}</h4>
                <p>{t("policy.block_5.text_1")}</p>
                <ul>
                  <li>{t("policy.block_5.list_1.item_1")}</li>
                  <li>{t("policy.block_5.list_1.item_2")}</li>
                  <li>{t("policy.block_5.list_1.item_3")}</li>
                </ul>
                <p>{t("policy.block_5.text_2")}</p>

                <h4>{t("policy.block_6.title")}</h4>
                <p>{t("policy.block_6.text_1")}</p>

                <h4>{t("policy.block_7.title")}</h4>
                <ul>
                  <li>{t("policy.block_7.list.item_1")}</li>
                  <li>{t("policy.block_7.list.item_2")}</li>
                  <li>{t("policy.block_7.list.item_3")}</li>
                  <li>{t("policy.block_7.list.item_4")}</li>
                  <li>{t("policy.block_7.list.item_5")}</li>
                  <li>{t("policy.block_7.list.item_6")}</li>
                  <li>{t("policy.block_7.list.item_7")}</li>
                </ul>
                <p>{t("policy.block_7.text_1")}</p>
              </div>
              <div className={styles.policyBlock}>


                <h4>{t("policy.block_8.title")}</h4>
                <p>{t("policy.block_8.text_1")}</p>

                <h4>{t("policy.block_9.title")}</h4>
                <p>{t("policy.block_9.text_1")}</p>

                <h4>{t("policy.block_10.title")}</h4>
                <p>{t("policy.block_10.text_1")}</p>
                <p>{t("policy.block_10.text_2")}</p>

                <h3>{t("policy.cookie_policy.title")}</h3>
                <p>{t("policy.cookie_policy.text_1")}</p>

                <h4>{t("policy.cookie_policy.block_1.title")}</h4>
                <p>{t("policy.cookie_policy.block_1.text_1")}</p>

                <h4>{t("policy.cookie_policy.block_2.title")}</h4>
                <ul>
                  <li>{t("policy.cookie_policy.block_2.list.item_1")}</li>
                  <li>{t("policy.cookie_policy.block_2.list.item_2")}</li>
                  <li>{t("policy.cookie_policy.block_2.list.item_3")}</li>
                  <li>{t("policy.cookie_policy.block_2.list.item_4")}</li>
                </ul>

                <h4>{t("policy.cookie_policy.block_3.title")}</h4>
                <p>{t("policy.cookie_policy.block_3.text_1")}</p>
                <ul>
                  <li>{t("policy.cookie_policy.block_3.list.item_1")}</li>
                  <li>{t("policy.cookie_policy.block_3.list.item_2")}</li>
                  <li>{t("policy.cookie_policy.block_3.list.item_3")}</li>
                </ul>
                <p>{t("policy.cookie_policy.block_3.text_2")}</p>

                <h4>{t("policy.cookie_policy.block_4.title")}</h4>
                <p>{t("policy.cookie_policy.block_4.text_1")}</p>
                <p>{t("policy.cookie_policy.block_4.text_2")}</p>
                <ul>
                  <li><a href={t("policy.cookie_policy.block_4.links.Chrome")} target="_blank"
                         rel="noopener noreferrer">Google
                    Chrome</a></li>
                  <li><a href={t("policy.cookie_policy.block_4.links.Firefox")} target="_blank"
                         rel="noopener noreferrer">Mozilla
                    Firefox</a></li>
                  <li><a href={t("policy.cookie_policy.block_4.links.Safari")} target="_blank"
                         rel="noopener noreferrer">Safari</a></li>
                </ul>

                <h4>{t("policy.cookie_policy.block_5.title")}</h4>
                <p>{t("policy.cookie_policy.block_5.text_1")}</p>
                <p>{t("policy.cookie_policy.block_5.text_2", {date: currentDate})}</p>
                <p>{t("policy.cookie_policy.block_5.text_3")}</p>
              </div>
            </div>
            <img className={styles.policyImage} src={policyImage} alt=""/>
          </div>
        </div>
      </div>
    </main>
  )
}