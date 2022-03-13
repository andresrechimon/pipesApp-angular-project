import { Component } from '@angular/core';
import { SFChar } from '../../interfaces/testNumbers.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent{
  isCap:boolean = false;
  orderBy:string = '';
  sfCharacters:SFChar[] = [
    {
      name: 'Ryu',
      nationality: 'Japón',
      type: 'Input'
    },
    {
      name: 'Honda',
      nationality: 'Japón',
      type: 'Carga'
    },
    {
      name: 'Blanka',
      nationality: 'Brasil',
      type: 'Carga'
    },
    {
      name: 'Guile',
      nationality: 'U.S.A',
      type: 'Carga'
    },
    {
      name: 'T. Hawk',
      nationality: 'México',
      type: 'Carga'
    },
    {
      name: 'Fei Long',
      nationality: 'Hong Kong',
      type: 'Input'
    },
    {
      name: 'Balrog',
      nationality: 'U.S.A',
      type: 'Carga'
    },
    {
      name: 'Sagat',
      nationality: 'Tailandia',
      type: 'Input'
    },
    {
      name: 'Akuma',
      nationality: 'Japón',
      type: 'Input'
    },
    {
      name: 'Ken',
      nationality: 'U.S.A',
      type: 'Input'
    },
    {
      name: 'Chun Li',
      nationality: 'China',
      type: 'Carga'
    },
    {
      name: 'Zangief',
      nationality: 'U.R.S.S',
      type: 'Input'
    },
    {
      name: 'Dhalsim',
      nationality: 'India',
      type: 'Input'
    },
    {
      name: 'Cammy',
      nationality: 'U.K',
      type: 'Input'
    },
    {
      name: 'Dee Jay',
      nationality: 'Jamaica',
      type: 'Carga'
    },
    {
      name: 'Vega',
      nationality: 'España',
      type: 'Carga'
    },
    {
      name: 'Bison',
      nationality: 'Desconocida',
      type: 'Carga'
    }
  ];

  changeCap(){
    this.isCap = !this.isCap;
  }

  changeOrder(value:string){
    this.orderBy = value;
  }
}
