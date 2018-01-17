
import { Coupon } from './../Common/Coupon';
import { CreateCouponComponent } from './../components/create-coupon/create-coupon.component';
import { GetAllCouponsComponent } from './../components/get-all-coupons/get-all-coupons.component';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestService {

  constructor(private _http: Http) { }

  private errorHandler(error: Response) {
    return Observable.throw(error);
  }


  public GetAllCouponsFromRest() {
    let url = "http://localhost:8080/company/getallcoupons";
    return this._http.get(url).map(function (result) {
      return result.json()
    })
  }

  public GetCompanyFromRest() {
    let url = "http://localhost:8080/company/getcompanyname";
    return this._http.get(url).map(function (result) {
      return result.json()
    })
  }


  public GetCouponFromRestById(id: number) {
    let url = "http://localhost:8080/company/getcoupon/ " + id;
    return this._http.get(url).map(res => {
      // If request fails, throw an Error that will be caught 
      if (!res.status) {
        throw new Error('This request has failed ' + res.status);
      } // If everything went fine, return the response 
      else {
        return res.json();
      }
    });
  };

  public GetCouponsFromRestByDate(date: Date) {
    let url = "http://localhost:8080/company/getcouponsbydate/ " + date;
    return this._http.get(url).map(res => { 
      if (res.status != 200) {
        throw new Error('This request has failed ' + res.status);
      } 
        return res.json();

    }).catch(this.errorHandler);
  };


  public GetCouponsFromRestByPrice(price: number) {
    let url = "http://localhost:8080/company/getcouponsbyprice/ " + price;
    return this._http.get(url).map(result => {
      if (result.status != 200) {
        throw new RangeError(JSON.stringify(result));
      }
      return result.json();

    }).catch(this.errorHandler);
  };


  public CreateCoupon(coupon: Coupon) {
    return this._http.post("http://localhost:8080/company/createcoupon", coupon);
  }


  public UpdateCoupon(coupon: Coupon) {
    return this._http.put("http://localhost:8080/company/updatecoupon", coupon);
  }


  public RemoveCouponFromRest(id: number) {
    return this._http.delete("http://localhost:8080/company/removecoupon/" + id);
  }



}
