import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { RickAndMortyApiResult } from 'src/app/types/RickAndMorty.inteface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyCharactersResolver
  implements Resolve<RickAndMortyApiResult>
{
  private http = inject(HttpClient);

  resolve(route: ActivatedRouteSnapshot): Observable<RickAndMortyApiResult> {
    const query = route.queryParams['name']
      ? `?name=${route.queryParams['name']}`
      : '';

    return this.http.get<RickAndMortyApiResult>(
      `${environment.RickAndMortyApi}/character${query}`
    );
  }
}
