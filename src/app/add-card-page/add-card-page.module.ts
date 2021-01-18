import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCardPagePageRoutingModule } from './add-card-page-routing.module';

import { AddCardPagePage } from './add-card-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCardPagePageRoutingModule
  ],
  declarations: [AddCardPagePage]
})
export class AddCardPagePageModule {}
