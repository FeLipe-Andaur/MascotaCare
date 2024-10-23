import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-gatos',
  templateUrl: './registro-gatos.page.html',
  styleUrls: ['./registro-gatos.page.scss'],
})
export class RegistroGatosPage {


  raza: any[] = [
    { id: 1, nombreRaza: "Siamés" },
    { id: 2, nombreRaza: "Persa" },
    { id: 3, nombreRaza: "Abisinio" },
    { id: 4, nombreRaza: "Bengalí" },
    { id: 5, nombreRaza: "otro" },

  ];

  esterilizado: any[] = [
    { id: 1, nombreEsterilizado: "Si" },
    { id: 2, nombreEsterilizado: "No" },
 
  ];

  genero: any[] = [
    { id: 1, nombreGenero: "Masculino" },
    { id: 2, nombreGenero: "Femenino" },
 
  ];

  data: any = {
    nombre: "",
    genero: "",
    esterilizado: "",
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
    if (this.data.nombre && this.data.genero && this.data.esterilizado && this.data.raza && this.data.fecNacimiento) {
      const razaSeleccionada = this.raza.find(r => r.id === this.data.raza);
      const nombreRaza = razaSeleccionada ? razaSeleccionada.nombreRaza : this.data.otraRaza || 'Raza desconocida';
      
      
      const esterilizadoSeleccionado = this.esterilizado.find(e => e.id === this.data.esterilizado);
      const nombreEsterilizado = esterilizadoSeleccionado ? esterilizadoSeleccionado.nombreEsterilizado : 'No especificado';

      const generoSeleccionado = this.genero.find(g => g.id === this.data.genero);
      const nombreGenero = generoSeleccionado ? generoSeleccionado.nombreGenero : 'Genero desconocido'
  
      this.presentAlert("Información",
        `Nombre: ${this.data.nombre} Género: ${nombreGenero} Esterilizado: ${nombreEsterilizado} Raza: ${nombreRaza} Fecha de Nacimiento: ${this.data.fecNacimiento}`
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
