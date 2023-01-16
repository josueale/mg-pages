import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
})
export class RickAndMortyComponent {
  private readonly route = inject(ActivatedRoute);

  public characters = [];

  onSearch() {
    console.log('hi');
  }

  ngOnInit() {
    this.route.data.subscribe(({ response }) => {
      console.log(response.results);
      this.characters = response.results;
    });
  }
}
