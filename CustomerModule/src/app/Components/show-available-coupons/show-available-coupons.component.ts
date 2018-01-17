import { Coupon } from './../../Common/Coupon';
import { ClientRestService } from './../../Services/client-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-available-coupons',
  templateUrl: './show-available-coupons.component.html',
  styleUrls: ['./show-available-coupons.component.css']
})
export class ShowAvailableCouponsComponent implements OnInit {

  coupons: Coupon[];

  constructor(private _ClientService: ClientRestService) { }


  ngOnInit() {
    this._ClientService.getAllCustomerCouponsForViewing().subscribe((response) => {
      this.coupons = response;
    });



  }

  PurchaseCoupon(c) {
    this._ClientService.purchaseCoupon(c).subscribe();
  }


}
