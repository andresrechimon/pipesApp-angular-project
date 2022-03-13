import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styleUrls: ['./no-common.component.css']
})
export class NoCommonComponent{
  //i18nSelect
  name:string = 'Fátima';
  genre:string = 'Femenino';

  invitationMap = {
    'Masculino': 'verlo',
    'Femenino' : 'verla'
  }

  changePerson(){
    if(this.name === 'Fátima'){
      this.name = 'Andrés'
      this.genre = 'Masculino'
    }else{
      this.name = 'Fátima'
      this.genre = 'Femenino'
    }
  }

  //i18nPlural
  reviewers: string[] = ['Fátima', 'Andrés', 'Chichi'];
  reviewersMap = {
    '=0': 'no tenemos ningún reviewer trabajando',
    '=1': 'tenemos 1 reviewer trabajando',
    'other': 'tenemos # reviewers trabajando'
  }

  deleteReviewer(){
    this.reviewers.pop();
  }

  //KeyValue Pipe
  person = {
    nombre: 'Andrés',
    edad: 26,
    dirección: 'Segurola y La Habana 4310, séptimo piso'
  }

  //Json Pipe
  sfCharacters = [
    {
      name: 'Bison',
      CA: 'Ult. P. Crusher'
    },
    {
      name: 'Sagat',
      CA: 'Tiger Rampage'
    },
    {
      name: 'Vega',
      CA: 'Bloody Rain'
    },
    {
      name: 'Balrog',
      CA: 'Gigaton Blow'
    }
  ];

  //Async Pipe
  myObservable = interval(1000);
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('¡Tenemos la data de la promesa! (resuelta en 3500)');
    }, 3500);
  });
}
