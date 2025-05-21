import {forwardRef} from 'react';
import styles from './Burger.module.scss';

type BurgerProps = {
  isOpen: boolean;
  onClick?: () => void;
};

const Burger = forwardRef<HTMLButtonElement, BurgerProps>(({isOpen, onClick}, ref) => {
  const burgerClasses = `${styles.burger} ${isOpen ? styles.active : ''}`;

  return (
    <button
      ref={ref}
      className={burgerClasses}
      onClick={onClick}
    >
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </button>
  );
});


Burger.displayName = 'Burger';

export default Burger;
