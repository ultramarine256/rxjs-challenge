import { NgModule } from '@angular/core';
import { FocusWithinDirective } from './focus-within.directive';
import { YellowDirective } from '../yellow/yellow.directive';

@NgModule({
  declarations: [FocusWithinDirective, YellowDirective],
  exports: [FocusWithinDirective, YellowDirective],
})
export class FocusWithinModule {}
