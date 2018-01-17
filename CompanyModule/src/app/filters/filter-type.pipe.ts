import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(coupons: any, type?: any): any {
    //check if undedind
    if (type === undefined) return coupons;

    //return the companies array
    return coupons.filter(function (coupon) {
      return coupon.type.toLowerCase().includes(type.toLowerCase());
    })
  }
}
