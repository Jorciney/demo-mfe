import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@libs';

@Component({
  standalone: true,
  imports: [RouterModule, TitleComponent],
  selector: 'app-root',
  template: `Test fom MFE <app-title></app-title>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
