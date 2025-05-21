import {NavLink} from "react-router-dom";
import styles from "./MobileOverlay.module.scss";
import logo from "@/assets/icons/logo.svg";
import {Button} from "@/components/ui/Button/Button.js";
import {navigationLinks, navigationMenu} from '@/config/config';
import type {MobileMenuItem} from '@/types/config.types';
import {useModal} from "@/context/AppealDialogContext.tsx";
import {useTranslation} from "react-i18next";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {RefObject, useEffect, useRef} from "react";

interface MobileOverlayProps {
  isOpen: boolean;
  toggleMobileMenu: (isOpen: boolean) => void;
  burgerRef: RefObject<HTMLButtonElement | null>;
}


const MobileOverlay = ({isOpen, toggleMobileMenu, burgerRef}: MobileOverlayProps) => {
  const {openAppealDialog} = useModal();

  const {t} = useTranslation();

  const mobileMenu: MobileMenuItem[] = navigationMenu.map((item) => {
    if (item.type === 'dropdown') {
      return {
        type: 'accordion',
        label: item.label,
        items: navigationLinks,
      };
    }
    return item;
  });
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileOverlayRef.current &&
        !mobileOverlayRef.current.contains(e.target as Node) &&
        !(burgerRef.current && burgerRef.current.contains(e.target as Node))
      ) {
        toggleMobileMenu(false);
      }
    };


    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }


    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleMobileMenu]);

  const mobileOverlayRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mobileOverlayRef} aria-hidden={!isOpen}
         className={`${styles.mobileOverlay} ${isOpen ? styles.active : ''}`}>
      <div className={styles.mobileOverlayInner}>
        <NavLink
          className={`${styles.mobileOverlayLogo} ${styles.active}`}
          to="/"
        >
          <img src={logo} alt="Logo"/>

        </NavLink>
        <nav className={styles.mobileOverlayMenu}>
          <ul className={styles.mobileOverlayMenuList}>
            {mobileMenu.map((item, i) => {
              if (item.type === 'link') {
                return (
                  <li key={i}>
                    <NavLink
                      to={item.to}
                      className={({isActive}) =>
                        isActive
                          ? `${styles.mobileOverlayMenuLink} ${styles.active}`
                          : styles.mobileOverlayMenuLink
                      }
                    >
                      {t(item.label)}
                    </NavLink>
                  </li>
                );
              }
              if (item.type === 'accordion') {
                return (
                  <li key={item.label}>
                    <Accordion
                      type="single"
                      collapsible
                      className={styles.mobileOverlayAccordion}
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className={styles.mobileOverlayAccordionButton}>
                          {t(item.label)}
                        </AccordionTrigger>
                        <AccordionContent className={styles.mobileOverlayAccordionInner}>
                          <ul className={styles.mobileOverlayAccordionList}>
                            {item.items.map((subItem, i) => (
                              <li key={i} className={styles.mobileOverlayAccordionItem}>
                                <NavLink
                                  to={subItem.to}
                                  className={({isActive}) =>
                                    isActive
                                      ? `${styles.mobileOverlayAccordionLink} ${styles.active}`
                                      : styles.mobileOverlayAccordionLink
                                  }
                                >
                                  {t(subItem.label)}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </nav>
        <div className={styles.mobileOverlaySeparator}></div>
        <Button className={styles.mobileOverlayButton}
                variant={'black'}
                onClick={openAppealDialog}
        >
          {t(`buttons.appeal`)}
        </Button>
      </div>
    </div>
  );
};

export default MobileOverlay;