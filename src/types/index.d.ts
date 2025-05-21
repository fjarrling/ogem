/// <reference types="vite/client" />

declare module "*.svg" {
  const src: string;
  export default src;
}

// SASS/SCSS modules
declare module "*.module.scss" {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';


declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

declare module "*.svg?react" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}
declare module "*.mp3" {
  const src: string;
  export default src;
}
