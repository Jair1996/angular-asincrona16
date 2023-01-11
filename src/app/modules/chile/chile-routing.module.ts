import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChilePageComponent } from './pages/chile-page/chile-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ChilePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChileRoutingModule {}
