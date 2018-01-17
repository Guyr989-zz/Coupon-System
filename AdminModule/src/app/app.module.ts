import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerService } from './services/customer-services/customer.service';
import { CompanyService } from './services/company-services/company.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { FooterComponent } from './components/footer/footer.component';






@NgModule({
  declarations: [
    AppComponent,
    GetAllCompaniesComponent,
    GetAllCustomersComponent,
    GetCompanyComponent,
    GetCustomerComponent,
    CreateCompanyComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    UpdateCompanyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "CreateCompany", component: CreateCompanyComponent},
      { path: "UpdateCompany", component: UpdateCompanyComponent },
      { path: "CreateCustomer", component: CreateCustomerComponent },
      { path: "UpdateCustomer", component: UpdateCustomerComponent },
      { path: "GetAllCustomers", component: GetAllCustomersComponent },
      { path: "GetAllCompanies", component: GetAllCompaniesComponent },
      { path: "GetCompany", component: GetCompanyComponent },
      { path: "GetCustomer", component: GetCustomerComponent }
    ])
  ],
  providers: [CompanyService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
