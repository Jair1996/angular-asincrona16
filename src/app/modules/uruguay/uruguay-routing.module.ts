import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UruguayPageComponent } from './pages/uruguay-page/uruguay-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UruguayPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UruguayRoutingModule { }
