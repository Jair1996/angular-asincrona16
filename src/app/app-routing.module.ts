import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'peru',
    loadChildren: () =>
      import('./modules/peru/peru.module').then((m) => m.PeruModule),
  },
  {
    path: 'chile',
    loadChildren: () =>
      import('./modules/chile/chile.module').then((m) => m.ChileModule),
  },
  {
    path: 'uruguay',
    loadChildren: () =>
      import('./modules/uruguay/uruguay.module').then((m) => m.UruguayModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
