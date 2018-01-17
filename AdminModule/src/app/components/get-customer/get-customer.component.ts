import { Coupon } from './../../Common/Coupon';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-services/customer.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})

export class GetCustomerComponent {

  id: number;
  name: string;
  password: string;
  coupons: Coupon[];
  constructor(private _restService: CustomerService) { }

  
  getCustomer(id: number) {
    this._restService.getcustomerFromRest(this.id).subscribe(
      (data) => {
        this.id = data.id;
        this.name = data.custName;
        this.password = data.password;
        this.coupons = data.coupons;

      }
    );
  }
}
