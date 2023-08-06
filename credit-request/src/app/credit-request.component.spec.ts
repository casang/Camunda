import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditRequestComponent } from './credit-request.component';

describe('CreditRequestComponent', () => {
  let component: FormCreditRequestComponent;
  let fixture: ComponentFixture<FormCreditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreditRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
