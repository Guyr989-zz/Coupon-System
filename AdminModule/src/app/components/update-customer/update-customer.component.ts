import { Coupon } from './../../Common/Coupon';
import { Customer } from './../../Common/Customer';
import { CustomerService } from './../../services/customer-services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private _restService: CustomerService) { }

  public customer2Update: Customer;
  public customers: Customer[];
  public name: string ;
  public password: string;
  public id: number;
  public coupons:Coupon[];


  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    var self = this;
        this._restService.getAllCustomersFromRest().subscribe(
          function (response) {
            self.customers = response;
          });
  }

  updateCustomer() {
    this.customer2Update = new Customer(this.id, this.name, this.password,this.coupons);
    this._restService.updateCustomerInRest(this.customer2Update).subscribe();

  }
}
