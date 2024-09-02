import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class SeleccionMascota {

  constructor(private navCtrl: NavController) { }

  seleccionarMascota(tipoMascota: string) {
    if (tipoMascota === 'perro') {
      this.navCtrl.navigateForward('/registro-mascota');
    } else if (tipoMascota === 'gato') {
      this.navCtrl.navigateForward('/registro-mascota2');
    }
  }
}