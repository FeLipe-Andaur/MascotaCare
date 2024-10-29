import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      const email = this.form.value.email;

      if (email) { 
        this.firebaseSvc
          .sendRecoveryEmail(email)
          .then((res) => {
            this.utilsSvc.presentToast({
              message: 'Se ha enviado un correo para recuperar la contraseña',
              duration: 2500,
              color: 'success',
              position: 'middle',
              icon: 'checkmark-circle-outline',
            });

            this.utilsSvc.routerLink('/auth');
            this.form.reset();
          })
          .catch((error) => {
            console.log(error);
            this.utilsSvc.presentToast({
              message: error.message,
              duration: 2500,
              color: 'dark',
              position: 'middle',
              icon: 'alert-circle-outline',
            });
          })
          .finally(() => {
            loading.dismiss();
          });
      } else {
       
        console.log("El email es inválido");
        
        this.utilsSvc.presentToast({
          message: 'El email es inválido',
          duration: 2500,
          color: 'danger',
          position: 'middle',
          icon: 'alert-circle-outline',
        });
        loading.dismiss(); 
      }
    }
  }
}