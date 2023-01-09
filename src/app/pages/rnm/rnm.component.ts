import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rnm',
  templateUrl: './rnm.component.html',
})
export class RnmComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  public characters = [];

  ngOnInit() {
    this.route.data.subscribe(({ response }) => {
      console.log(response.results);
      this.characters = response.results;
    });
  }
}
