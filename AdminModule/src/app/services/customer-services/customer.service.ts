import { Customer } from './../../Common/Customer';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }

  public getAllCustomersFromRest() {
    const url = "http://localhost:8080/admin/getallcustomers";
    return this._http.get(url).map(function (result) {
      if (result.status != 200) {
        console.log("No customers in database");
      }
      return result.json();
    });
  }

  //gets 1 customer from the database by id
  public getcustomerFromRest(id: number) {
    return this._http.get("http://localhost:8080/admin/customer/ " + id).map(function (result) {
      if (result.status == 200) {
        return result.json();
      } else {
        alert("No customer with id: " + id);
        return;
      }
    }
    );
  }

  //deletes a customer from the database
  public removeCustomerFromRest(id: number) {
    return this._http.delete("http://localhost:8080/admin/removecustomer/" + id);
  }

  //creates new customer in database
  public addCustomerToRest(customer: Customer) {
    const url = "http://localhost:8080/admin/createcustomer/";
    return this._http.post(url, customer).map((result) => {
      if (result.status == 200) {
        alert("Customer '" + customer._CustName + "', was added successfully");
        return;
      }
      if (result.status == 204) {
        alert("Customer name: '" + customer._CustName + "', already exists");
        return;
      } else {
        console.error(result);
      }
    });
  }


  //update customer in database
  public updateCustomerInRest(customer: Customer) {
    const url = "http://localhost:8080/admin/updatecustomer/";
    return this._http.put(url, customer).map((result) => {
      if (result.status == 200) {
        alert("Password updated successfully");
        return
      } else {
        alert("Was't able to update customer '" + customer._CustName + "'.");
        return;
      }
    });
  }


}
