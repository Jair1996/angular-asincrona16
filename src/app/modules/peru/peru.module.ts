import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeruRoutingModule } from './peru-routing.module';
import { PeruPageComponent } from './pages/peru-page/peru-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PeruPageComponent
  ],
  imports: [
    CommonModule,
    PeruRoutingModule,
    SharedModule
  ]
})
export class PeruModule { }
