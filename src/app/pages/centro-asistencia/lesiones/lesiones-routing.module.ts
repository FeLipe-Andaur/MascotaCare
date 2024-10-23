import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LesionesPage } from './lesiones.page';

const routes: Routes = [
  {
    path: '',
    component: LesionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LesionesPageRoutingModule {}
