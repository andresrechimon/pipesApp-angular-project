import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { CommonComponent } from './pages/common/common.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { capitalPipe } from './pipes/capital.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    CommonComponent,
    OrderComponent,
    capitalPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonComponent,
    CommonComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class TestNumbersModule { }
