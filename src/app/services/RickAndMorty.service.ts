import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { RickAndMortyApi as API } from 'src/environments/environment';
import { RickAndMortyApiResult } from '../types/RickAndMorty.inteface';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService implements Resolve<RickAndMortyApiResult> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<RickAndMortyApiResult> {
    const query = route.queryParams['name']
      ? `?name=${route.queryParams['name']}`
      : '';

    return this.http.get<RickAndMortyApiResult>(`${API}/character${query}`);
  }

  searchCharacter(
    characterToFind: string = ''
  ): Observable<RickAndMortyApiResult> {
    return this.http.get<RickAndMortyApiResult>(
      `${API}/character?name=${characterToFind}`
    );
  }
}
