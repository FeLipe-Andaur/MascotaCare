import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUpdatePetComponent } from './components/add-update-pet/add-update-pet.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, CustomInputComponent, CustomCardComponent, CustomCardComponent,AddUpdatePetComponent,],
  exports:[HeaderComponent, FooterComponent, CustomInputComponent, CustomCardComponent, CustomCardComponent, FormsModule, ReactiveFormsModule,AddUpdatePetComponent,],
  imports: [
    CommonModule, IonicModule, ReactiveFormsModule, FormsModule, RouterModule,
  ]
})
export class SharedModule { }
