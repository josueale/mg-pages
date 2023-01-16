import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RickAndMortyService } from 'src/app/services/RickAndMorty.service';
import { RickAndMortyCharacter } from 'src/app/types/RickAndMorty.inteface';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
})
export class RickAndMortyComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor(private RickAndMortySvc: RickAndMortyService) {}

  private queryParams: Params = {
    name: '',
  };

  public characters$!: Observable<RickAndMortyCharacter[]>;

  handleNavigate() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  clearSearch(): void {
    this.queryParams['name'] = null;
    this.handleNavigate();

    this.RickAndMortySvc.searchCharacterByName('');
  }

  onSearch(value: string) {
    this.RickAndMortySvc.searchCharacterByName(value);

    this.queryParams['name'] = value;

    this.handleNavigate();
  }

  ngOnInit() {
    this.characters$ = this.RickAndMortySvc.characters$;
  }
}
