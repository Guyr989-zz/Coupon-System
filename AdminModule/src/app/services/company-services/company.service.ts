import { Company } from './../../Common/Company';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'


@Injectable()
export class CompanyService {

  constructor(private _http: Http) { }


  //gets all the companies from the database
  public getAllcompaniesFromRest() {
    const url = "http://localhost:8080/admin/getallcompanies";
    return this._http.get(url).map((result) => {
      if (result.status != 200) {
        console.log("No companies avilable");
      }
      return result.json();
    }
    );
  }

  //gets 1 company from the database by id
  public getcompanyFromRest(id: number) {
    return this._http.get("http://localhost:8080/admin/company/ " + id).map((result) => {
      if (result.status == 200) {
        return result.json();
      }else{
        alert("No company with id: " + id);
        return;
      }
    }
    );
  }

  //creates new company in database
  public addCompanyToRest(company: Company) {
    const url = "http://localhost:8080/admin/createcompany/";
    return this._http.post(url, company).map((result) => {
      if (result.status == 200) {
        alert("company created successfully");
        return;
      }
      if (result.status == 204) {
        alert("Company name already exists");
        return;
      } else {
        console.error(result);
      }
    });
  }

  //update password and email for existing company in database
  public updateCompanyInRest(company: Company) {
    const url = "http://localhost:8080/admin/updatecompany/";
    return this._http.put(url, company).map((result) => {
      if (result.status == 200) {
        alert("Company updated successfully");
        return
      } else {
        alert("Wasn't able to update Company.");
        return;
      }
    })

  }

  //deletes a company from the database
  public removeCompanyFromRest(id: number) {
    return this._http.delete("http://localhost:8080/admin/removecompany/" + id).map((resulte) => {
      if (resulte.status == 200) {
        alert("Company removed successfully!")
        return;
      }else{
        alert("UnAble to erase company");
      }
    });
  }



}
