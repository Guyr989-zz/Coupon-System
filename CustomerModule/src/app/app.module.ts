import { TypeFilterPipe } from './filters/type-filter.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { GetAllCustomerCouponsComponent } from './Components/get-all-customer-coupons/get-all-customer-coupons.component';
import { HttpModule } from '@angular/http';
import { ClientRestService } from './Services/client-rest.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Coupon } from './Common/Coupon';
import { Customer } from './Common/Customer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Http } from '@angular/http/src/http';
import { GetPurchasedCouponByPriceComponent } from './components/get-purchased-coupon-by-price/get-purchased-coupon-by-price.component';
import { ShowAvailableCouponsComponent } from './components/show-available-coupons/show-available-coupons.component';
import { FooterComponent } from './components/footer/footer.component';
import { PriceFilterPipe } from './filters/price-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GetPurchasedCouponByPriceComponent,
    GetAllCustomerCouponsComponent,
    ShowAvailableCouponsComponent,
    FooterComponent,
    PriceFilterPipe,
    TypeFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "mycoupons", component: GetAllCustomerCouponsComponent },
      { path: "availablecoupons", component: ShowAvailableCouponsComponent }
    ])
  ],
  providers: [ClientRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
