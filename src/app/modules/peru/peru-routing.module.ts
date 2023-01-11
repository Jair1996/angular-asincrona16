import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeruPageComponent } from './pages/peru-page/peru-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PeruPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeruRoutingModule {}
