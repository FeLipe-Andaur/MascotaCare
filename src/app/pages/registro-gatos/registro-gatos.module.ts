import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroGatosPageRoutingModule } from './registro-gatos-routing.module';

import { RegistroGatosPage } from './registro-gatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroGatosPageRoutingModule
  ],
  declarations: [RegistroGatosPage]
})
export class RegistroGatosPageModule {}
