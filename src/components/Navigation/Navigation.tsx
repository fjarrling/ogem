import styles from './Navigation.module.scss'
import {navigationLinks} from '@/config/config.ts'
import {NavLink} from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx"
import arrowDown from "@/assets/icons/arrow-down.svg";
import {useTranslation} from 'react-i18next';


type NavigationProps = {
  offset?: number;
  label: string;
}


const Navigation = ({offset, label}: NavigationProps) => {
  const { t } = useTranslation();



  return (

    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={styles.navigationButton}
          aria-haspopup="true"
        >
          {t(label)}
          <img
            className={styles.navigationButtonIndicator}
            src={arrowDown}
            alt=""
            data-state="closed"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={"start"} className={styles.navigationDropdown} sideOffset={offset}>
        <div className={styles.navigationDropdownList}>
          {navigationLinks.map((item, i) => (
            <DropdownMenuItem
              key={i}
              className={styles.navigationDropdownItem}
            >
              <NavLink
                to={item.to}
                className={styles.navigationDropdownButton}
              >
                {t(item.label)}
              </NavLink>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>

  );
};

export default Navigation;