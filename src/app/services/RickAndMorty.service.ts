import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { RickAndMortyApiResult } from '../types/RickAndMorty.inteface';

@Injectable({
  providedIn: 'root',
})
export class RnmService implements Resolve<RickAndMortyApiResult> {
  private API = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  resolve(): Observable<RickAndMortyApiResult> {
    return this.http.get<RickAndMortyApiResult>(this.API);
  }
}
