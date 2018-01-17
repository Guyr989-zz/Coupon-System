import { Coupon } from './../Common/Coupon';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class ClientRestService {

  constructor(private _http: Http) { }


  public getAllCustomerCouponsFromRest() {
    const url = "http://localhost:8080/customer/getallpurchasedcoupons";
    return this._http.get(url).map((result) => {
      return result.json();
    }
    );
  }

  public getAllCustomerCouponsForViewing() {
    const url = "http://localhost:8080/customer/getallcouponsforviewing";
    return this._http.get(url).map((coupons) => {
      return coupons.json();
    })
  }


  public purchaseCoupon(c: Coupon) {
    return this._http.post("http://localhost:8080/customer/purchasecoupon/", c).map((resulte) => {
      if (resulte.status == 200) {
        alert("Coupon purchased successfully");
        return;
      }
      if (resulte.status == 204) {
        alert("This Coupon already been purchased");
        return;
      }
      else {
        alert("Somthing went wrong. Unable to purchase this coupon at the moment.");
      }

    });
  }

  public GetAllCustomerCoupons() {
    const url = "http://localhost:8080/customer/getallpurchasedcoupons";
    return this._http.get(url).map((coupons) => {
      return coupons.json();
    });
  }


  public GetCustomerName() {
    const url = "http://localhost:8080/customer/customername";
    return this._http.get(url).map((customer) => {
      return customer.json();
    });
  }


}
