import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '@libs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule, TitleComponent, TranslateModule],
  providers: [TranslateService],
  selector: 'app-root',
  template: `
    <div style="background-color: yellow"> This is the MFE
      <app-title></app-title>
    </div>`,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'demo-mfe';
  translateService = inject(TranslateService)

  ngOnInit() {
    console.log('AppComponent ', this.translateService.getLangs());
  }
}
