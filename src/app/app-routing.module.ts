import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RickAndMortyService } from './services/RickAndMorty.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rick-and-morty',
    resolve: {
      response: RickAndMortyService,
    },
    loadChildren: () =>
      import('./pages/rick-and-morty/rick-and-morty.module').then((m) => m.RickAndMortyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
