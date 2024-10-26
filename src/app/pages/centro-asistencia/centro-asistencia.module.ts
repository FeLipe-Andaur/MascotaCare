import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';

import { CentroAsistenciaPageRoutingModule } from './centro-asistencia-routing.module';

import { CentroAsistenciaPage } from './centro-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroAsistenciaPageRoutingModule,
    FontAwesomeModule 
  ],
  declarations: [CentroAsistenciaPage]
})
export class CentroAsistenciaPageModule {}
