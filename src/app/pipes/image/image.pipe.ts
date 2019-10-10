import { environment } from './../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, tipo: string = 'users'): any {

    let url = `${ environment.coreUrl }/img`;

    if (img === null || img === undefined) {
      switch (tipo) {
        case 'users':
          url += '/users/user-6.svg';
          break;
        case 'categories':
          url += '/categories/layers.svg';
          break;
        default:
          break;
      }
    }

    return url;

  }

}
