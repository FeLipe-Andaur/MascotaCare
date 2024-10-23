import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtaquesPageRoutingModule } from './ataques-routing.module';

import { AtaquesPage } from './ataques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtaquesPageRoutingModule
  ],
  declarations: [AtaquesPage]
})
export class AtaquesPageModule {}
