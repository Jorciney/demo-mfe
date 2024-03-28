import { SharedUiComponent } from '@angular-monorepo/shared-ui';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, SharedUiComponent],
  selector: 'app-root',
  template: `Test fom MFE <lib-shared-ui></lib-shared-ui>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
