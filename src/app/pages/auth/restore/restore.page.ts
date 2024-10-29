import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage {

  constructor(
    public alertController: AlertController,
    private router: Router
  ) { }

  //mostrar Alerta 

  mostrarAlerta() {
    this.presentAlert(
      'Correo enviado',
      'Se envio un correo a tu cienta para restablecer tu contraseña'
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
          this.router.navigate(['/auth']);
        },
      },
      ],
    });
    await alert.present();
  }

}