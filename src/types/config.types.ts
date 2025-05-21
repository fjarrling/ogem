import {To} from 'react-router-dom'; // Импортируем тип

export type LinkItem = {
  type: 'link';
  label: string;
  to: To;
};


export type AccordionItem = {
  type: 'accordion';
  label: string;
  items: NavigationLink[];
};


export type DropdownItem = {
  type: 'dropdown';
  label: string;
};


export type MenuItem = LinkItem | DropdownItem;

export type MobileMenuItem = LinkItem | AccordionItem;

export type NavigationLink = {
  label: string;
  to: To;
};
