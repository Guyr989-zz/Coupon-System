import { Customer } from './Common/Customer';
import { ClientRestService } from './Services/client-rest.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  customerName: Customer;

  constructor(private _clientService: ClientRestService) {

  }

  ngOnInit() {
    this._clientService.GetCustomerName().subscribe((response) => {
      return this.customerName = response.custName;
    });
  }
  onSubmit() {
    window.location.assign("http://localhost:8080/logoutcontroller");
   }

}
