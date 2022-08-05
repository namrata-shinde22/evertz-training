import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInputButtonComponent } from './radio-input-button.component';

describe('RadioInputButtonComponent', () => {
  let component: RadioInputButtonComponent;
  let fixture: ComponentFixture<RadioInputButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadioInputButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
