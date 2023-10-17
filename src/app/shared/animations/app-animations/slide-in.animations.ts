import { trigger, transition, style, animate } from '@angular/animations';

//Esta classe possui as animações que estão aplicadas na home para
//que os componentes deslizem da esquerda e da direita.

export const SlideInFromLeft = trigger('slideInFromLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('1000ms ease-in', style({ transform: 'translateX(0)' })),
  ]),
]);

export const SlideInFromRight = trigger('slideInFromRight', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('1000ms ease-in', style({ transform: 'translateX(0)' })),
  ]),
]);
