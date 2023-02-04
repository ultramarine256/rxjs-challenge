import { NgModule } from '@angular/core';
import {
  Day01Component,
  Day02Component,
  Day03Component,
  FocusWithinModule,
  PagesComponent,
  PagesRouting,
} from './index';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  Day01Component,
  Day02Component,
  Day03Component,
  PagesComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [PagesRouting, CommonModule, FocusWithinModule],
  exports: [],
  providers: [],
})
export class PagesModule {}
