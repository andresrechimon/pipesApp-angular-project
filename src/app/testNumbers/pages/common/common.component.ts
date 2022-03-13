import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent{
  lowerName:string = 'andrés';
  upperName:string = 'ANDRÉS';
  fullName:string = 'aNdRéS rEcHiMoN';
  date:Date = new Date();
}
