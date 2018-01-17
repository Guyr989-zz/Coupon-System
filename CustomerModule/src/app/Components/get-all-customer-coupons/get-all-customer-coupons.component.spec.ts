import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCustomerCouponsComponent } from './get-all-customer-coupons.component';

describe('GetAllCustomerCouponsComponent', () => {
  let component: GetAllCustomerCouponsComponent;
  let fixture: ComponentFixture<GetAllCustomerCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCustomerCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCustomerCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
