import { Coupon } from './../../Common/Coupon';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {


  coupons: Coupon[];
     id: number;
     title: string;
     startDate: Date;
     endDate: Date;
     amount: number;
     type: string;
     price: number;
     message: string;
     image: string;
     filterTitle: string;
     filterType: string;

  constructor(private clientRest: RestService) { }


  ngOnInit() {
    this.GetAllCoupons();
  }

  toggleFilterTitle() {
    $('.filterTitle').toggle("fast", function () {

    });
  }


  toggleFilterType() {
    $('.filterType').toggle("fast", function () {

    });
  }

  toggleFilterPrice() {
    $('.filterPrice').toggle("fast", function () {

    });
  }



  GetAllCoupons = () => {
    this.clientRest.GetAllCouponsFromRest().subscribe(
      (response) => {
        this.coupons = response;
      });
  }

  removeCoupon(id: number, index: number) {
    if (confirm("Are you sure you want to delete this coupon?") == true) {
      this.clientRest.RemoveCouponFromRest(id).subscribe(response => {
        this.coupons.splice(index, 1);
      });
    }
  }


  editCoupon(id:number, index:number){
    this.id = id;
    this.coupons.splice(index,1);
    console.log(this.id);
    }


}
