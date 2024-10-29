import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestorePageRoutingModule } from './restore-routing.module';
import { RestorePage } from './restore.page';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorePageRoutingModule,
    SharedModule
  ],
  declarations: [RestorePage],
  
})
export class RestorePageModule {}
