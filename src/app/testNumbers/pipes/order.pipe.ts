import { Pipe, PipeTransform } from '@angular/core';
import { SFChar } from '../interfaces/testNumbers.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(sfCharacters: SFChar[], orderBy:string = ''): SFChar[]{

    switch(orderBy){
      case 'name':
        return sfCharacters.sort((a,b) => (a.name > b.name) ? 1 : -1);
      case 'nationality':
        return sfCharacters.sort((a,b) => (a.nationality > b.nationality) ? 1 : -1);
      case 'type':
        return sfCharacters.sort((a,b) => (a.type > b.type) ? 1 : -1);
      

      default:
        return sfCharacters;
    }
  }

}
