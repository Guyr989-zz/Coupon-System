import { Coupon } from './../../Common/Coupon';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-coupons-by-date',
  templateUrl: './get-coupons-by-date.component.html',
  styleUrls: ['./get-coupons-by-date.component.css']
})
export class GetCouponsByDateComponent implements OnInit {


  coupon: Coupon;
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  type: string;
  price: number;
  message: string;
  image: string;
  coupons: Coupon[] = [];

  constructor(private clientRest: RestService) { }

  ngOnInit() {
  }

  getCouponsByDate(endDate: Date) {
    this.clientRest.GetCouponsFromRestByDate(this.endDate).subscribe((response) => {
      console.log(endDate);
      return this.coupons = response;
    })

  }


}
