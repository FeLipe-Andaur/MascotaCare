import { inject,Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {AlertController,AlertOptions,LoadingController,ToastController,ToastOptions,} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  router = inject(Router);
  alertCtrl = inject(AlertController);
  loadingCtrl = inject(LoadingController); 
  toastCtrl = inject(ToastController); 

   //======= Router ========
  // Enruta a cualquier pagina.
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

   //===== Loading =====//
   loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

    //===== Toast =====//
    async presentToast(opts?: ToastOptions) {
      const toast = await this.toastCtrl.create(opts);
      toast.present();
    }

    //=== Alert ===
    async presentAlert(opts?: AlertOptions){
      const alert = await this.alertCtrl.create(opts);

      await alert.present();
    }

  //========= LocalStorage =========//
  // Guardar en local storage
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

   // Obtener de local storage
   getFromLocalStorage(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}