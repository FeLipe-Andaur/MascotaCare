import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPerrosPage } from './registro-perros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPerrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPerrosPageRoutingModule {}
