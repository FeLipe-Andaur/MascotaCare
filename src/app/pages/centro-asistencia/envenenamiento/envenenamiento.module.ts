import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvenenamientoPageRoutingModule } from './envenenamiento-routing.module';

import { EnvenenamientoPage } from './envenenamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvenenamientoPageRoutingModule
  ],
  declarations: [EnvenenamientoPage]
})
export class EnvenenamientoPageModule {}
