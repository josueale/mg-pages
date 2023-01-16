import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from 'src/app/components/inputs/search/search.component';
import { CharacterCardComponent } from './components/cards/character-card/character-card.component';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';


@NgModule({
  declarations: [
    RickAndMortyComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    SearchComponent,
  ]
})
export class RickAndMortyModule { }
