import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChileRoutingModule } from './chile-routing.module';
import { ChilePageComponent } from './pages/chile-page/chile-page.component';


@NgModule({
  declarations: [
    ChilePageComponent
  ],
  imports: [
    CommonModule,
    ChileRoutingModule
  ]
})
export class ChileModule { }
