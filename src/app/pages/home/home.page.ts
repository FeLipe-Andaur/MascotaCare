import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AnimationController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class Home implements AfterViewInit {
  @ViewChildren('card', { read: ElementRef }) cardElements!: QueryList<ElementRef>;
  login: any;

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    private animationController: AnimationController,
    private router: Router = inject(Router), // Inyecta Router aquí
    private activatedRoute: ActivatedRoute
  ) {
    // Información del login
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.login = this.router.getCurrentNavigation()?.extras?.state?.['login'];
        console.log(this.login);
      }
    });
  }

  seleccionarMascota(tipoMascota: string) {
    if (tipoMascota === 'perro') {
      this.navCtrl.navigateForward('/registro-perros');
    } else if (tipoMascota === 'gato') {
      this.navCtrl.navigateForward('/registro-gatos');
    }
  }

  ngAfterViewInit() {
    this.cardElements.forEach((card) => {
      const animation = this.animationController
        .create()
        .addElement(card.nativeElement)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ])
        .duration(1000)
        .iterations(Infinity);

      animation.play();
    });
  }

  // Mostrar Alerta
  cerrarSesionAlert() {
    this.presentAlert(
      'Cerrar Sesion :',
      'Sesion cerrada correctamente'
    );
  }

  // Crear Alerta
  async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/auth']);
        },
      }],
    });
    await alert.present();
  }
}