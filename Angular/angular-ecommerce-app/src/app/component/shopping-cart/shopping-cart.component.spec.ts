import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render my cart', () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4#cart').textContent).toContain('My Cart');
  });
  it('Should render line 2', () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4#emptycart').textContent).toContain(
      'Your cart is empty'
    );
  });
  it('Should render line 3', () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain(
      'Add item to it now'
    );
  });
  it('Home nav link sholud be persent', () => {
    const fixture = TestBed.createComponent(ShoppingCartComponent);
    let button = fixture.debugElement.nativeElement.querySelector('button');
    fixture.detectChanges();
    expect(button.textContent).toContain('Shop Now');
    button.click();
  });
});
