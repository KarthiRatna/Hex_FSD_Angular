import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  /* transform(value: any, ...args: any[]): any {
    return null;
  } */
  transform(quantity: number, outOfStockMessage: string="Out of stock",inStockMessage="In Stock"): string {
    if(quantity>0)
    {
      return inStockMessage;
    }
    else{
      return outOfStockMessage;
    }
  }
}
