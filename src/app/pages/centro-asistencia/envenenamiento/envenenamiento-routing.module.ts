import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvenenamientoPage } from './envenenamiento.page';

const routes: Routes = [
  {
    path: '',
    component: EnvenenamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvenenamientoPageRoutingModule {}
