import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(
    public alertController: AlertController,
    private router: Router) { }

  //mostrar Alerta 

  registrarseAlert() {
    this.presentAlert(
      'Exito :',
      'Te has registrado correctamente'
    );

  }


  //Crear Alerta
  async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login']);
        },
      },
      ],
    });
    await alert.present();
  }

}
