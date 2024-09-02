import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionMascota } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionMascota,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeleccionMascotaRoutingModule { }
