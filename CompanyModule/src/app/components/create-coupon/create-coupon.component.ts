import { Coupon } from './../../Common/Coupon';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  newCoupon: Coupon;
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  type: string;
  price: number;
  message: string;
  public image: string;
  constructor(private clientRest: RestService) { }


  ngOnInit() {
  }


  CreateCoupon() {
    this.newCoupon = new Coupon(this.id, this.title, this.startDate, this.endDate, this.amount, this.type, this.price, this.message, this.image);
    this.clientRest.CreateCoupon(this.newCoupon).subscribe(
      function (response) {
        console.log(response);
      });
  }



}
