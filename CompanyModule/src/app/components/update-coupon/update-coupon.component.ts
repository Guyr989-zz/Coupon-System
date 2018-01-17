import { Coupon } from '../../Common/Coupon';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

       coupon2Update: Coupon;
       id: number;
       title: string;
       startDate: Date;
       endDate: Date;
       amount: number;
       type: string;
       price: number;
       message: string;
       image: string;
       coupons: Coupon[];

  constructor(private clientRest: RestService) { }
  ngOnInit() {
    this.GetAllCoupons();
  }


  GetAllCoupons = () => {
    this.coupons = new Array;
    this.clientRest.GetAllCouponsFromRest().subscribe(
      (response) => {
        this.coupons = response;
      });
  }


  UpdateCoupon() {
    this.coupon2Update = new Coupon(this.id, this.title, this.startDate, this.endDate, this.amount, this.type, this.price, this.message, this.image)
    this.clientRest.UpdateCoupon(this.coupon2Update).subscribe((res) => {
      if (res.status == 200) {
        alert("Coupon updated successfully!");
        return;
      }
      else {
        alert("Could not update coupon");
      }
    });
  }



}
