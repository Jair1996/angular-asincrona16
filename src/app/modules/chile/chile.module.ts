import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChileRoutingModule } from './chile-routing.module';
import { ChilePageComponent } from './pages/chile-page/chile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChilePageComponent
  ],
  imports: [
    CommonModule,
    ChileRoutingModule,
    SharedModule
  ]
})
export class ChileModule { }
