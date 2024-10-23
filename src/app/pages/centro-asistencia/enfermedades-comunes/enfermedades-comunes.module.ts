import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfermedadesComunesPageRoutingModule } from './enfermedades-comunes-routing.module';

import { EnfermedadesComunesPage } from './enfermedades-comunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfermedadesComunesPageRoutingModule
  ],
  declarations: [EnfermedadesComunesPage]
})
export class EnfermedadesComunesPageModule {}
