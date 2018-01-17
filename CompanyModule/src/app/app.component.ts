import { RestService } from './services/rest.service';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { Component } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companyName: String;

  constructor (private clientRest: RestService){}

 ngOnInit(){
  this.clientRest.GetCompanyFromRest().subscribe((response)=>{
    return this.companyName =  response.compName;
  });
}

onSubmit() {
  window.location.assign("http://localhost:8080/logoutcontroller");
 }


}

