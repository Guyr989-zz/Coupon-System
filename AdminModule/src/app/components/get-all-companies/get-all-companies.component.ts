import { Coupon } from './../../Common/Coupon';
import { Company } from './../../Common/Company';
import { CompanyService } from './../../services/company-services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  checked: boolean = false;
  companies: Company[]
  copmany2Remove: Company;
  id: number;
  name: string;
  password: string;
  email: string;
  image: string;
  company: Company;

  confirmMsg: string = "Are you sure you want to delete this company?";

  constructor(private _restService: CompanyService) { }

  //loads all companies on init
  ngOnInit() {
    this.getAllCompanies();
  }


  //gets All companies from database
  getAllCompanies = () => {
    this._restService.getAllcompaniesFromRest().subscribe(
      (response) => {
        this.companies = response
        //display coupons if not null
        for (let c of this.companies) {
          if (c._coupons == null) {
            return this.checked = true;
          }
        }

      }
    );
  }



  //removes the company from the dataBase using the rest service
  removeCompany(id: number, index: number) {
    if (confirm("Are You sure you wish to delete this company?") == true) {
      this._restService.removeCompanyFromRest(id).subscribe(response => {
        this.companies.splice(index, 1);
      }
      );
    }
  }
}
