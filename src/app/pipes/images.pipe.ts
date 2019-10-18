import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

 /*  transform(value: any, ...args: any[]): any {
    return null;
  } */

  transform(imageurl: string): string {
    if(!imageurl || imageurl.length==0)
    {
      return `./assets/default.png`;
    }
    else
    {
    return imageurl;
    }
  }

}
