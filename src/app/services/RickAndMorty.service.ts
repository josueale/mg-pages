import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  RickAndMortyApiResult,
  RickAndMortyCharacter,
} from '../types/RickAndMorty.inteface';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private http = inject(HttpClient);

  characters$ = new BehaviorSubject<RickAndMortyCharacter[]>([]);

  constructor() {
    this.searchCharacterByName();
  }

  getCharacters() {}

  setCharacters(data: RickAndMortyCharacter[]): void {
    this.characters$.next(data);
  }

  searchCharacterByName(characterToFind = ''): void {
    this.http
      .get<RickAndMortyApiResult>(
        `${environment.RickAndMortyApi}/character?name=${characterToFind}`
      )
      // .subscribe((response: RickAndMortyApiResult) => {
      //   this.setCharacters(response?.results ?? []);
      // })
      .subscribe({
        next: (response) => {
          this.setCharacters(response?.results ?? []);
        },
        // ? is this bad?
        error: (error) => {
          this.setCharacters([]);
        },
      });
  }
}
