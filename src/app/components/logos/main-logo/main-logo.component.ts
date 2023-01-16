import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a routerLink="/" class="flex items-center">
      <img src="/assets/images/LOGOTIPO_2.png" alt="Materia Gris" width="150" />
    </a>
  `,
})
export class MainLogoComponent {}
