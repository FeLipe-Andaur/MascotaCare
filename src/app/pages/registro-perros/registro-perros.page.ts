import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-registro-perros',
  templateUrl: './registro-perros.page.html',
  styleUrls: ['./registro-perros.page.scss'],
})
export class RegistroPerrosPage {
  raza: any[] = [
    { id: 1, nombreRaza: "Labrador" },
    { id: 2, nombreRaza: "Bulldog" },
    { id: 3, nombreRaza: "Beagle" },
    { id: 4, nombreRaza: "Poodle" },
    { id: 5, nombreRaza: "Otro" },
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

  constructor(
    public alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  limpiar() {
    for (const key in this.data) {
      this.data[key] = "";
    }
  }

  mostrar() {
    if (this.data.nombre && this.data.genero && this.data.vacuna && this.data.raza && this.data.fecNacimiento) {
      const razaSeleccionada = this.raza.find(r => r.id === this.data.raza);
      const nombreRaza = razaSeleccionada ? razaSeleccionada.nombreRaza : 'Raza desconocida';

      const vacunaSeleccionada = this.data.vacuna === "1" ? "Sí" : "No";

      const generoSeleccionado = this.genero.find(g => g.id === this.data.genero);
      const nombreGenero = generoSeleccionado ? generoSeleccionado.nombreGenero : 'Género desconocido';

      this.presentAlert("Información",
        `Nombre: ${this.data.nombre} | Género: ${nombreGenero} | Vacunas al día: ${vacunaSeleccionada} | Raza: ${nombreRaza} | Fecha de Nacimiento: ${this.data.fecNacimiento}`
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

  async ingresar() {
    if (this.data.nombre && this.data.genero && this.data.vacuna && this.data.raza && this.data.fecNacimiento) {
      try {
        // Guarda la información en Firebase
        await this.firebaseService.addDocument('dogs', this.data);

        // Muestra un mensaje de éxito
        await this.utilsService.presentToast({
          message: 'Información del perro guardada con éxito',
          duration: 2000,
          color: 'success'
        });

        // Redirige a la página "tab centro-veterinario"
        this.utilsService.routerLink('/centro-asistencia/perros');
      } catch (error) {
        console.error('Error al guardar la información:', error);

        // Muestra un mensaje de error
        await this.utilsService.presentToast({
          message: 'Error al guardar la información',
          duration: 2000,
          color: 'danger'
        });
      }
    } else {
      this.presentAlert("Error", "Por favor, complete todos los campos.");
    }
  }
}
