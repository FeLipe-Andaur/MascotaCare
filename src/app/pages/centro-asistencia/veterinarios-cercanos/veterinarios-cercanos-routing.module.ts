import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinariosCercanosPage } from './veterinarios-cercanos.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinariosCercanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinariosCercanosPageRoutingModule {}
