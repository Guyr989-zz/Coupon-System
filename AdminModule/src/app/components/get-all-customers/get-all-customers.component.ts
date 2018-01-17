import { Coupon } from './../../Common/Coupon';
import { Customer } from './../../Common/Customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer-services/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {


  constructor(private _restService: CustomerService) { }
  customers: Customer[];
  customer2Remove: Customer;
  coupons: Coupon[];
  id: number;
  name: string;
  password: string;
  title:string;
  confirmMsg: string = "Are you sure you want to delete this customer? ";

  //loads all customers on init
  ngOnInit() {
    this.getAllCustomers();
  }

  //gets All customers from database
  getAllCustomers = () => {
    var self = this;
    this._restService.getAllCustomersFromRest().subscribe(
      function (response) {
        self.customers = response;
      }
    );
  }

  
  
  removeCustomer(id:number, index:number) {
    this._restService.removeCustomerFromRest(id).subscribe(response =>{
         this.customers.splice(index, 1);
    });
 }

}
