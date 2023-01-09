import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RnmRoutingModule } from './rnm-routing.module';

import { RnmCardComponent } from '../../components/cards/rnm-card/rnm-card.component';
import { RnmComponent } from './rnm.component';


@NgModule({
  declarations: [
    RnmComponent,
    RnmCardComponent,
  ],
  imports: [
    CommonModule,
    RnmRoutingModule,
  ]
})
export class RnmModule { }
