import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx"

import arrowDown from '@/assets/icons/arrow-down.svg'
import language from '@/assets/icons/language.svg'
import styles from './LanguageSwitch.module.scss'
import {useTranslation} from 'react-i18next';

type LanguageProps = {
  offset?: number;
};

const LanguageSwitch = ({offset = 10}: LanguageProps) => {

  const {i18n} = useTranslation();

  const availableLanguages = Object.keys(i18n.options.resources || {});

  const handleLanguageChange = (lang: string) => {
    // setSelectedLanguage(lang);
    i18n.changeLanguage(lang)
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={styles.languageButton}
          aria-haspopup="true"
        >
          <img src={language} alt="LanguageSwitch icon"/>
          {i18n.language}
          <img
            className={styles.languageButtonIndicator}
            src={arrowDown}
            alt=""
            data-state="closed"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={styles.languageDropdown} sideOffset={offset}>
        <div className={styles.languageDropdownList}>
          {availableLanguages.map((lang) => (
            <DropdownMenuItem
              key={lang}
              className={styles.languageDropdownItem}
              onClick={() => handleLanguageChange(lang)}
            >
              <button className={styles.languageDropdownButton}>
                {lang}
              </button>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitch