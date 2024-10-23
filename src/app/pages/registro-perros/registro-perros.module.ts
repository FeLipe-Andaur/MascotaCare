import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroPerrosPageRoutingModule } from './registro-perros-routing.module';
import { RegistroPerrosPage } from './registro-perros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPerrosPageRoutingModule
  ],
  declarations: [RegistroPerrosPage]
})
export class RegistroPerrosModule { }
