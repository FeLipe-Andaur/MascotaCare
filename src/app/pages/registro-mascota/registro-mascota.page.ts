import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-mascota',
  templateUrl: './registro-mascota.page.html',
  styleUrls: ['./registro-mascota.page.scss'],
})
export class RegistroMascotaPage {


  raza: any[] = [
    { id: 1, nombreRaza: "Yorshire terrier" },
    { id: 2, nombreRaza: "Labrador" },
    { id: 3, nombreRaza: "Husky" },
    { id: 4, nombreRaza: "Poodle" },
    { id: 5, nombreRaza: "otro" },

  ];

  data: any = {
    nombre: "",
    genero: "",
    raza: "",
    fecNacimiento: ""
  };

  login: any;
  constructor(public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.login = this.router.getCurrentNavigation()?.extras?.state?.['login'];
        console.log(this.login);
      }
    });
  }

  limpiar() {

    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data, key, { value: "" });
    }
  }

  mostrar() {
    if (this.data.nombre && this.data.genero && this.data.raza && this.data.fecNacimiento) {
      const razaSeleccionada = this.raza.find(r => r.id === this.data.raza);
      const nombreRaza = razaSeleccionada ? razaSeleccionada.nombreRaza : this.data.otraRaza || 'Raza desconocida';

      this.presentAlert("Información",
        `Nombre: ${this.data.nombre} Género: ${this.data.genero} Raza: ${nombreRaza} Fecha de Nacimiento: ${this.data.fecNacimiento}`
      );
    } else {
      this.presentAlert("Error", "Por favor, complete todos los campos.");
    }
  }
  async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
