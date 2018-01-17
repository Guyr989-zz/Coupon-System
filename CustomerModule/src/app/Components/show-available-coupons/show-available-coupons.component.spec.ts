import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableCouponsComponent } from './show-available-coupons.component';

describe('ShowAvailableCouponsComponent', () => {
  let component: ShowAvailableCouponsComponent;
  let fixture: ComponentFixture<ShowAvailableCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAvailableCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAvailableCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
