import { Coupon } from './../../Common/Coupon';
import { ClientRestService } from './../../Services/client-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-customer-coupons',
  templateUrl: './get-all-customer-coupons.component.html',
  styleUrls: ['./get-all-customer-coupons.component.css']
})
export class GetAllCustomerCouponsComponent implements OnInit {

  typeFilter: string;
  coupons: Coupon[];
  type: string;
  price: number;

  constructor(private _ClientService: ClientRestService) { }

  ngOnInit() {
    this._ClientService.GetAllCustomerCoupons().subscribe((response) => {
      this.coupons = response;
    });
  }

}
