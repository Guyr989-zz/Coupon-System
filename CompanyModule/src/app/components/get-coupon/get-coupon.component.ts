import { Coupon } from './../../Common/Coupon';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  type: string;
  price: number;
  message: string;
  image: string;
  coupon = new Coupon(this.id, this.title, this.startDate, this.endDate, this.amount, this.type, this.price, this.message, this.image);

  constructor(private clientRest: RestService) { }


  ngOnInit() {
  }


  getCoupon(id) {
    this.clientRest.GetCouponFromRestById(this.id).subscribe(
      (response) => {
        this.id = response.id;
        this.title = response.title;
        this.startDate = response.startDate;
        this.endDate = response.endDate;
        this.amount = response.amount;
        this.type = response.type;
        this.price = response.price;
        this.message = response.message;
        this.image = response.image;
      });
  }


  //delets the coupons from ui and database
  removeCoupon(id: number) {
    this.clientRest.RemoveCouponFromRest(id).subscribe(response => {
      $('tr').remove();
    });
  }


}
