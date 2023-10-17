import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SlideInFromLeft } from './slide-in.animations';
import { SlideInFromRight } from './slide-in.animations';

//esta classe exporta as animações em forma de module

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule, CommonModule],
  exports: [],
  declarations: [],
})
export class AppAnimationsModule {}
