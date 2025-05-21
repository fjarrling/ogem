import {useRef, useState} from 'react';
import {useMediaQuery} from '@/hooks/useMediaQuery/useMediaQuery';
import {Button} from '@/components/ui/Button/Button';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import Navigation from "@/components/Navigation/Navigation";
import Burger from "@/components/ui/Burger/Burger"
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import MobileOverlay from "@/components/MobileOverlay/MobileOverlay";
import {navigationMenu} from '@/config/config.js';
import {useModal} from "@/context/AppealDialogContext";
import Logo from "@/components/ui/Logo/Logo";
import {useTranslation} from 'react-i18next';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {openAppealDialog} = useModal();
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  const burgerRef = useRef<HTMLButtonElement>(null);
  const {t} = useTranslation();
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerContainer} container `}>
          <div className={`${styles.headerInner}  width-before-scroll-bar`}>
            <Logo className={styles.headerLogo}/>
            {!isMobile ? (
              <nav className={styles.headerMenu}>
                <ul className={styles.headerMenuList}>
                  {navigationMenu.map((item, index) => {
                    if (item.type === 'link') {
                      return (
                        <li key={index} className={styles.headerMenuItem}>
                          <NavLink
                            to={item.to}
                            className={({isActive}) =>
                              isActive
                                ? `${styles.headerMenuLink} ${styles.active}`
                                : styles.headerMenuLink
                            }
                          >
                            {t(item.label)}
                          </NavLink>
                        </li>
                      );
                    }

                    if (item.type === 'dropdown') {
                      return (
                        <li key={index} className={styles.headerMenuItem}>
                          <Navigation offset={32} label={item.label}/>
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>
              </nav>
            ) : null}

            <div className={styles.headerButtons}>
              <LanguageSwitch offset={10}/>
              {!isMobile ? <Button variant="black" onClick={openAppealDialog}>{t(`buttons.appeal`)}</Button> : null}
              {isMobile ? <Burger ref={burgerRef} isOpen={isMenuOpen} onClick={toggleMenu}/> : null}
            </div>
          </div>
        </div>
      </header>
      {isMobile ? <MobileOverlay burgerRef={burgerRef} toggleMobileMenu={setIsMenuOpen} isOpen={isMenuOpen}/> : null}
    </>
  );
};

export default Header;