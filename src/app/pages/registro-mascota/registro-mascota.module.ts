import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroMascotaPageRoutingModule } from './registro-mascota-routing.module';
import { RegistroMascotaPage } from './registro-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroMascotaPageRoutingModule
  ],
  declarations: [RegistroMascotaPage]
})
export class RegistroMascotaModule { }
