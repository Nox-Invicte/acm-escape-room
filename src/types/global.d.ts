/// <reference types="react" />

declare module 'lucide-react' {
  import { ComponentType } from 'react';
  export const Calendar: ComponentType<any>;
  export const Users: ComponentType<any>;
  export const Trophy: ComponentType<any>;
  export const Clock: ComponentType<any>;
  export const MapPin: ComponentType<any>;
  export const Info: ComponentType<any>;
  export const HelpCircle: ComponentType<any>;
}

declare module 'framer-motion' {
  import { ComponentType } from 'react';
  export const motion: {
    div: ComponentType<any>;
    [key: string]: ComponentType<any>;
  };
}

declare module 'next/image' {
  import { ComponentType } from 'react';
  const Image: ComponentType<any>;
  export default Image;
}

declare module 'react-fast-marquee' {
  import { ComponentType } from 'react';
  const Marquee: ComponentType<any>;
  export default Marquee;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
