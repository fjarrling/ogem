import styles from './Footer.module.scss'
import Logo from "@/components/ui/Logo/Logo.tsx";
import {footerMenu} from "@/config/config.ts";
import {NavLink} from "react-router-dom";
import Navigation from "@/components/Navigation/Navigation.tsx";
import {Button} from "@/components/ui/Button/Button.tsx";
import {useModal} from "@/context/AppealDialogContext.tsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const {t} = useTranslation();
  const {openAppealDialog} = useModal();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerInner}>
          <Logo className={styles.footerLogo}/>
          <nav className={styles.footerMenu}>
            <ul className={styles.footerMenuList}>
              {footerMenu.map((item, index) => {
                if (item.type === 'link') {
                  return (
                    <li key={index} className={styles.footerMenuItem}>
                      <NavLink
                        to={item.to}
                        className={({isActive}) =>
                          isActive
                            ? `${styles.footerMenuLink} ${styles.footerMenuLinkActive}`
                            : styles.footerMenuLink
                        }
                      >
                        {t(item.label)}
                      </NavLink>
                    </li>
                  );
                }

                if (item.type === 'dropdown') {
                  return (
                    <li key={index} className={styles.footerMenuItem}>
                      <Navigation offset={16} label={t(item.label)}/>
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </nav>
          <div className={styles.footerSeparator}></div>
          <Button variant="black" onClick={openAppealDialog}>
            {t('buttons.appeal')}
          </Button>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        {t('footer.copyright', {year: currentYear})}
      </div>
    </footer>
  );
};

export default Footer;