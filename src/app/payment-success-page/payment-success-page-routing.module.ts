import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSuccessPagePage } from './payment-success-page.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSuccessPagePageRoutingModule {}
