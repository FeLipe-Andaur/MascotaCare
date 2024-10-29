import { inject,Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastOptions } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  router = inject(Router);
  loadingCtrl: any;
  toastCtrl: any;
  alertCtrl = inject(AlertController);

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