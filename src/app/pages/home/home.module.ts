import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionMascotaRoutingModule } from './home-routing.module';
import { SeleccionMascota } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: SeleccionMascota,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, CommonModule, FormsModule, SeleccionMascotaRoutingModule,SharedModule,],
  declarations: [SeleccionMascota]

})
export class SeleccionMascotaModule { }