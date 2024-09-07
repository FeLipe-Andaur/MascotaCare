import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class SeleccionMascota implements AfterViewInit {
  @ViewChildren('card', { read: ElementRef }) cardElements!: QueryList<ElementRef>;

  constructor(
    private navCtrl: NavController,
    private animationController: AnimationController
  ) { }

  seleccionarMascota(tipoMascota: string) {
    if (tipoMascota === 'perro') {
      this.navCtrl.navigateForward('/registro-mascota');
    } else if (tipoMascota === 'gato') {
      this.navCtrl.navigateForward('/registro-mascota2');
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
        .duration(1000) // Duración en milisegundos
        .iterations(Infinity); // Repite la animación infinitamente

      animation.play(); // Reproduce la animación
    });
  }
}
