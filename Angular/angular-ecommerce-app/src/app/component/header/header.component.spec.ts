import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app name', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(
      'Shopping Mart'
    );
  });

  it('home link should be present', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const button =
      fixture.debugElement.nativeElement.querySelector('button.homeButton');
    fixture.detectChanges();
    expect(button.textContent).toContain('Home');
    button.click();
  });

  it('product link should be present', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const button = fixture.debugElement.nativeElement.querySelector(
      'button.productButton'
    );
    fixture.detectChanges();
    expect(button.textContent).toContain('Products');
  });

  it('cart link should be present', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const button =
      fixture.debugElement.nativeElement.querySelector('button.cartButton');
    fixture.detectChanges();
    expect(button.textContent).toContain('Cart');
    button.click();
  });
});
