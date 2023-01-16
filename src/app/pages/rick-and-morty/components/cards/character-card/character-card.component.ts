import { Component, Input } from '@angular/core';

import { RickAndMortyCharacter } from 'src/app/types/RickAndMorty.inteface';

@Component({
  selector: 'rick-and-morty-character-card',
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent {
  @Input() character!: RickAndMortyCharacter;
}
