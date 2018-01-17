import { Coupon } from './../../Common/Coupon';
import { Company } from './../../Common/Company';
import { CompanyService } from './../../services/company-services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  copmany2Update: Company;
  companies: Company[];
  name: string;
  password: string;
  email: string;
  id: number;
  coupons: Coupon[];

  constructor(private _restService: CompanyService) { }



  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    var self = this;
    this._restService.getAllcompaniesFromRest().subscribe(
      function (response) {
        self.companies = response
      });
  }


  updateCompany() {
    this.copmany2Update = new Company(this.name, this.password, this.email, this.coupons, this.id);
    this._restService.updateCompanyInRest(this.copmany2Update).subscribe();

  }

}
