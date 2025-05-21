import type {MenuItem, NavigationLink} from '@/types/config.types.ts';

export const navigationMenu: MenuItem[] = [
  {
    type: 'link',
    label: 'navigation.home',
    to: '/',
  },
  {
    type: 'link',
    label: 'navigation.about',
    to: '/about',
  },
  {
    type: 'dropdown',
    label: 'navigation.products_services',
  },
  {
    type: 'link',
    label: 'navigation.contact',
    to: '/contact',
  },
];
export const footerMenu: MenuItem[] = [
  {
    type: 'link',
    label: 'navigation.home',
    to: '/',
  },
  {
    type: 'link',
    label: 'navigation.about',
    to: '/about',
  },
  {
    type: 'dropdown',
    label: 'navigation.products_services',
  },
  {
    type: 'link',
    label: 'navigation.contact',
    to: '/contact',
  },
  {
    type: 'link',
    label: 'navigation.policy',
    to: '/policy',
  },
];

export const navigationLinks: NavigationLink[] = [
  {label: 'navigation.links.cacao_beans', to: '/products/cacao-beans'},
  {label: 'navigation.links.energy_products', to: '/products/energy'},
  {label: 'navigation.links.commodities', to: '/products/commodities'},
  {label: 'navigation.links.food_agriculture', to: '/products/food-and-agriculture'},
  {label: 'navigation.links.construction_equipment', to: '/products/construction-equipment'},
  {label: 'navigation.links.production_equipment', to: '/products/production-equipment'},
  {label: 'navigation.links.view_all_products', to: '/products'},
  {label: 'navigation.links.services', to: '/services'},
];
