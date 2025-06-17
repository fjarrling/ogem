// src/types/svg.d.ts
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module 'swiper/css/navigation' {
  const content: { [className: string]: string };
  export default content;
}
declare module 'swiper/css' {
  const content: { [className: string]: string };
  export default content;
}