import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPurchasedCouponByPriceComponent } from './get-purchased-coupon-by-price.component';

describe('GetPurchasedCouponByPriceComponent', () => {
  let component: GetPurchasedCouponByPriceComponent;
  let fixture: ComponentFixture<GetPurchasedCouponByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPurchasedCouponByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPurchasedCouponByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
