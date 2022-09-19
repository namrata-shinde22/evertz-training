import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Welcome to Ecommerce App' `, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const title = fixture.debugElement.componentInstance;
    expect(title.title).toEqual('Welcome to Ecommerce App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to Ecommerce App'
    );
  }));
});
