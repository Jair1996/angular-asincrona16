import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UruguayRoutingModule } from './uruguay-routing.module';
import { UruguayPageComponent } from './pages/uruguay-page/uruguay-page.component';


@NgModule({
  declarations: [
    UruguayPageComponent
  ],
  imports: [
    CommonModule,
    UruguayRoutingModule
  ]
})
export class UruguayModule { }
