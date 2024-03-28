import { FooterComponent } from '@angular-monorepo/shared-ui';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent],
  selector: 'app-root',
  template: `Test fom Dummy <lib-footer></lib-footer>`,
  styleUrl: './dummy.component.scss',
})
export class DummyComponent {
}
