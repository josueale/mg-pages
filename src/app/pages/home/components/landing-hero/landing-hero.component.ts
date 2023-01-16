import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-hero',
  templateUrl: './landing-hero.component.html',
})
export class LandingHeroComponent {
  ShowAlert() {
    alert('Vista en desarrollo');
  }
}
