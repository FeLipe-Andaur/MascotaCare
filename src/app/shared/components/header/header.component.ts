import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() backButton!: string;
  @Input() isModal!: boolean;
  @Input() showMenu!: boolean;

  // ==== Propiedades del menú ====
  pages = [
    {
      title: 'Inicio',
      url: '/home/home',
      icon: 'home-outline',
    },
    {
      title: 'Perfil',
      url: '/home/profile',
      icon: 'person-outline',
    },
    {
      title: 'Centro de Asistencia',
      url: '/centro-asistencia',
      icon: 'medkit-outline',
    },
  ];

  router = inject(Router);
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  currentPath: string = '';
  // =============================

  ngOnInit() {
    // Inicialización del menú
    this.router.events.subscribe((event: any) => {
      if (event?.url) this.currentPath = event.url;
    });
  }

  // ====== Funcion para cerrar el modal ======
  dismissModal() {
    this.utilsSvc.dismissModal();
  }

  // Obtener usuario
  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  // Cerrar sesión
  signOut() {
    this.firebaseSvc.signOut().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}