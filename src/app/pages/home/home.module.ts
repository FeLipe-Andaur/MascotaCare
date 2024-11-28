import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { Home } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: Home,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule, CommonModule, FormsModule, HomeRoutingModule,SharedModule,],
  declarations: [Home]

})
export class HomePageModule { }