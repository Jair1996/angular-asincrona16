import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UruguayRoutingModule } from './uruguay-routing.module';
import { UruguayPageComponent } from './pages/uruguay-page/uruguay-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UruguayPageComponent
  ],
  imports: [
    CommonModule,
    UruguayRoutingModule,
    SharedModule
  ]
})
export class UruguayModule { }
