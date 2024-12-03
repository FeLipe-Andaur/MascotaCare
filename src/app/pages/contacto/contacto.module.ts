import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactoPageRoutingModule } from './contacto-routing.module';
import { ContactoPage } from './contacto.page';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Importa FormsModule aquí
    IonicModule,
    ContactoPageRoutingModule,
    SharedModule,
  ],
  declarations: [ContactoPage]
})
export class ContactoPageModule {}
