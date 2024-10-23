import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtaquesPage } from './ataques.page';

const routes: Routes = [
  {
    path: '',
    component: AtaquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtaquesPageRoutingModule {}
