import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-perros',
  templateUrl: './registro-perros.page.html',
  styleUrls: ['./registro-perros.page.scss'],
})
export class RegistroPerrosPage {


  raza: any[] = [
    { id: 1, nombreRaza: "Yorshire terrier" },
    { id: 2, nombreRaza: "Labrador" },
    { id: 3, nombreRaza: "Husky" },
    { id: 4, nombreRaza: "Poodle" },
    { id: 5, nombreRaza: "otro" },

  ];

  vacuna: any[] = [
    { id: 1, nombreVacuna: "Si" },
    { id: 2, nombreVacuna: "No" },
 
  ];

  genero: any[] = [
    { id: 1, nombreGenero: "Masculino" },
    { id: 2, nombreGenero: "Femenino" },
 
  ];

  data: any = {
    nombre: "",
    genero: "",
    vacuna: "",
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

      const generoSeleccionado = this.genero.find(g => g.id === this.data.genero);
      const nombreGenero = generoSeleccionado ? generoSeleccionado.nombreGenero : "Genero desconocido"

      const vacunaSeleccionada = this.vacuna.find(v => v.id === this.data.vacuna);
      const nombreVacuna = vacunaSeleccionada ? vacunaSeleccionada.nombreVacuna : "Vacuna desconocida"

      this.presentAlert("Información",
        `Nombre: ${this.data.nombre} Género: ${nombreGenero} vacuna: ${nombreVacuna} Raza: ${nombreRaza} Fecha de Nacimiento: ${this.data.fecNacimiento}`
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
