import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RickAndMortyService } from 'src/app/services/RickAndMorty.service';
import { RickAndMortyCharacter } from 'src/app/types/RickAndMorty.inteface';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
})
export class RickAndMortyComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly RickAndMortySvc = inject(RickAndMortyService);

  private queryParams: Params = {
    name: '',
  };

  public characters: RickAndMortyCharacter[] = [];

  onSearch(value: string) {
    this.RickAndMortySvc.searchCharacter(value).subscribe((result) => {
      this.characters = result.results;
    });

    this.queryParams['name'] = value;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.queryParams,
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  ngOnInit() {
    this.route.data.subscribe(({ response }) => {
      this.characters = response.results;
    });
  }
}
