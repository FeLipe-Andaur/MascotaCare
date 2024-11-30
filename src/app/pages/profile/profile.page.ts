import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  // ====== Obtener Usuario =====
  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  //===Tomar/Seleccionar Imagen ===

  async takeImage() {
    let user = this.user();
    let path = `users/${user.uid}`;
  
    const photo = await this.utilsSvc.takePicture('Imagen del perfil');
  
    if (!photo || !photo.dataUrl) {
      // Manejar el caso en el que no se obtiene una imagen
      this.utilsSvc.presentToast({
        message: 'No se seleccionó ninguna imagen.',
        duration: 2000,
        color: 'warning',
        position: 'middle',
        icon: 'alert-circle-outline',
      });
      return; // Finaliza si no hay imagen
    }
  
    const dataUrl = photo.dataUrl;
  
    const loading = await this.utilsSvc.loading();
    await loading.present();
  
    let imagePath = `${user.uid}/profile`;
  
    try {
      user.image = await this.firebaseSvc.uploadImage(imagePath, dataUrl);
  
      await this.firebaseSvc.updateDocument(path, { image: user.image });
      this.utilsSvc.saveInLocalStorage('user', user);
  
      this.utilsSvc.presentToast({
        message: 'Imagen actualizada exitosamente',
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline',
      });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ocurrió un error desconocido.';
      this.utilsSvc.presentToast({
        message: errorMessage,
        duration: 2500,
        color: 'danger',
        position: 'middle',
        icon: 'alert-circle-outline',
      });
    } finally {
      loading.dismiss();
    }
  } 
}