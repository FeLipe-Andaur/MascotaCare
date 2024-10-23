import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroGatosPage } from './registro-gatos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroGatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroGatosPageRoutingModule {}
