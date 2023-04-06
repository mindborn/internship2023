import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupees',
  pure: true
})
export class RupeesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value<0)
    {
      return "Error: Amount cannot be negative";
    }
    return "₹"+value+"/-";
  }

}
