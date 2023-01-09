import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RnmComponent } from './rnm.component';

const routes: Routes = [
  { path:'', component: RnmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RnmRoutingModule { }
