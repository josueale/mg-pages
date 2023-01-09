import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RnmService } from './services/rnm.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rnm',
    resolve: {
      response: RnmService,
    },
    loadChildren: () =>
      import('./pages/rnm/rnm.module').then((m) => m.RnmModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
