import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(coupons: any, price?: any): any {
    if (!(price == undefined || price == 0)) {
      return coupons ? coupons.filter(coupons => coupons.price == price) : coupons;
    }
    return coupons;
  }

}
