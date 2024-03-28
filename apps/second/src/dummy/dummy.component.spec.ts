import { TestBed } from '@angular/core/testing';
import { DummyComponent } from './dummy.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DummyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome demo-mfe'
    );
  });

  it(`should have as title 'demo-mfe'`, () => {
    const fixture = TestBed.createComponent(DummyComponent);
    const app = fixture.componentInstance;
    
  });
});
