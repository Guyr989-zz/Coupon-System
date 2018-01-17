import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(coupons: any, title?: any): any {
    //check if undedind
    if (title === undefined) return coupons;
    title = typeof(title) === 'string' ? title.toLowerCase():title;
    //return the companies array
    return coupons.filter(function (coupon) {
      return coupon.title.toLowerCase().includes(title.toLowerCase());
    })
  }
}
