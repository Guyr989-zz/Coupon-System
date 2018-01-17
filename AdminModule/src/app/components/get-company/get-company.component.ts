import { CompanyService } from './../../services/company-services/company.service';
import { Company } from './../../Common/Company';
import { Coupon } from './../../Common/Coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent {

  companies: Company[];
  company: Company;
  id: number;
  name: string;
  password: string;
  email: string;
  coupons: Coupon[];

  constructor(private _restService: CompanyService) { }


  getCompany(id: number) {
    this._restService.getcompanyFromRest(this.id).subscribe(
      (data) => {
          this.id = data.id;
          this.name = data.compName;
          this.password = data.password;
          this.email = data.email;
          this.coupons = data.coupons;
          return;
      }
    );
  }

}
