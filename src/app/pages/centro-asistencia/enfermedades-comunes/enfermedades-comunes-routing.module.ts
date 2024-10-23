import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfermedadesComunesPage } from './enfermedades-comunes.page';

const routes: Routes = [
  {
    path: '',
    component: EnfermedadesComunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfermedadesComunesPageRoutingModule {}
