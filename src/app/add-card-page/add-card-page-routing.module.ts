import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCardPagePage } from './add-card-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddCardPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCardPagePageRoutingModule {}
