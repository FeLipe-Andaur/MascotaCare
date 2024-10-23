import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesionesPageRoutingModule } from './lesiones-routing.module';

import { LesionesPage } from './lesiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesionesPageRoutingModule
  ],
  declarations: [LesionesPage]
})
export class LesionesPageModule {}
