import { trigger, transition, style, animate } from '@angular/animations';

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
