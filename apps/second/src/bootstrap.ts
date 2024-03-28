import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './dummy/dummy.config';
import { DummyComponent } from './dummy/dummy.component';

bootstrapApplication(DummyComponent, appConfig).catch((err) =>
  console.error(err)
);
