import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { CharacterCardComponent } from './components/cards/character-card/character-card.component';


@NgModule({
  declarations: [
    RickAndMortyComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule
  ]
})
export class RickAndMortyModule { }
