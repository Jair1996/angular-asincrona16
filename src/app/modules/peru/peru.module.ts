import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeruRoutingModule } from './peru-routing.module';
import { PeruPageComponent } from './pages/peru-page/peru-page.component';


@NgModule({
  declarations: [
    PeruPageComponent
  ],
  imports: [
    CommonModule,
    PeruRoutingModule
  ]
})
export class PeruModule { }
