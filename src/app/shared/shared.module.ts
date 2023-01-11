import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CountryHeroComponent } from './country-hero/country-hero.component';
import { CountryInformationComponent } from './country-information/country-information.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CountryHeroComponent,
    CountryInformationComponent,
  ],
  exports: [
    SidebarComponent,
    CountryInformationComponent,
    CountryHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
