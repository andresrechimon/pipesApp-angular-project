import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './testNumbers/pages/common/common.component';
import { NoCommonComponent } from './testNumbers/pages/no-common/no-common.component';
import { NumbersComponent } from './testNumbers/pages/numbers/numbers.component';
import { OrderComponent } from './testNumbers/pages/order/order.component';

const routes:Routes = [
  {path: '', component: CommonComponent, pathMatch: 'full'},
  {path: 'numbers', component: NumbersComponent},
  {path: 'no-common', component: NoCommonComponent},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
