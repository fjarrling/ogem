import styles from "./PageHeader.module.scss";
import {NavLink, To} from "react-router-dom";

interface Breadcrumb {
  label: string;
  link: To;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader = ({title, breadcrumbs}: PageHeaderProps) => {
  return (
    <header className={styles.pageHeader}>
      <div className={`${styles.pageHeaderContainer} container`}>
        <div className={styles.pageHeaderInner}>
          <h2 className={styles.pageHeaderTitle}>
            {title}
          </h2>
          <nav className={styles.pageHeaderBreadcrumbs}>
            <ul className={styles.pageHeaderBreadcrumbsList}>
              {
                breadcrumbs.map((item, index) => {
                  return (

                    <li key={index} className={styles.pageHeaderBreadcrumbsItem}>
                      <NavLink
                        to={item.link}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;