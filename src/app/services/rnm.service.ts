import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RnMResult } from '../types/rnm';

@Injectable({
  providedIn: 'root',
})
export class RnmService implements Resolve<RnMResult> {
  private API = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  resolve(): Observable<RnMResult> {
    return this.http.get<RnMResult>(this.API);
  }
}
