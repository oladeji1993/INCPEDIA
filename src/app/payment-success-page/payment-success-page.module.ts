import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessPagePageRoutingModule } from './payment-success-page-routing.module';

import { PaymentSuccessPagePage } from './payment-success-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSuccessPagePageRoutingModule
  ],
  declarations: [PaymentSuccessPagePage]
})
export class PaymentSuccessPagePageModule {}
