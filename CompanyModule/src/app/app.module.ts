
import { FilterTitlePipe } from './filters/filter-title.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestService } from './services/rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GetAllCouponsComponent } from './components/get-all-coupons/get-all-coupons.component';
import { GetCouponComponent } from './Components/get-coupon/get-coupon.component';
import { GetCouponsByDateComponent } from './Components/get-coupons-by-date/get-coupons-by-date.component';
import { UpdateCouponComponent } from './Components/update-coupon/update-coupon.component';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterTypePipe } from './filters/filter-type.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterPricePipe } from './filters/filter-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GetAllCouponsComponent,
    GetCouponComponent,
    GetCouponsByDateComponent,
    UpdateCouponComponent,
    CreateCouponComponent,
    FooterComponent,
    FilterTitlePipe,
    FilterTypePipe,
    FilterPricePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "GetAllCoupons", component: GetAllCouponsComponent },
      { path: "GetCoupon", component: GetCouponComponent },
      { path: "GetCouponsByDate", component: GetCouponsByDateComponent },
      { path: "UpdateCoupon", component: UpdateCouponComponent },
      { path: "CreateCoupon", component: CreateCouponComponent }
    ])
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
