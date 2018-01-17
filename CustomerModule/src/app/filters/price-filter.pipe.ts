import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(coupons: any, price?: any): any {
    console.log('price', price);
    if(!(price == undefined || price == 0)){
      return coupons? coupons.filter(coupons => coupons.price == price): coupons;
    }
    return coupons;
  }

}
