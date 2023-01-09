import { Component, Input } from '@angular/core';

@Component({
  selector: 'rnm-card',
  templateUrl: './rnm-card.component.html',
  styleUrls: ['./rnm-card.component.css'],
})
export class RnmCardComponent {
  title = 'Card';

  @Input() character: any ;


}
