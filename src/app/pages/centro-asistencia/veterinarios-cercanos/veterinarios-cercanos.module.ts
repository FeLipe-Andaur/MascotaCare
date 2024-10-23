import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinariosCercanosPageRoutingModule } from './veterinarios-cercanos-routing.module';

import { VeterinariosCercanosPage } from './veterinarios-cercanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinariosCercanosPageRoutingModule
  ],
  declarations: [VeterinariosCercanosPage]
})
export class VeterinariosCercanosPageModule {}
