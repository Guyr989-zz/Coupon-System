import { Coupon } from './../../Common/Coupon';
import { Customer } from './../../Common/Customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  
  CreateCustomerForm: any;
  newCustomer: Customer;
  id: number;
  password: string;
  name: string;
  coupons:Coupon[];
  
  constructor(private _restService: CustomerService) { }
  
  addCustomer(){
    this.newCustomer = new Customer(this.id,this.name, this.password,this.coupons);
    this._restService.addCustomerToRest(this.newCustomer).subscribe();
  }
}
