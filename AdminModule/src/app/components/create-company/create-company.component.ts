import { CompanyService } from './../../services/company-services/company.service';
import { Coupon } from './../../Common/Coupon';
import { Company } from './../../Common/Company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  newCompany: Company;
  id: number;
  password: string;
  email: string;
  name: string;
  coupons: Coupon[];

  constructor(private _restService: CompanyService) { }

  ngOnInit() {
  }



  addCompany() {
    this.newCompany = new Company(this.name, this.password, this.email, this.coupons, this.id);

    this._restService.addCompanyToRest(this.newCompany).subscribe();
  }

}
