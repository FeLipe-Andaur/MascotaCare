import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
 

  ngOnInit() {}

  
 //===Inicio de Sesión

async submit(){
  if(this.form.valid){
    const loading = await this.utilsSvc.loading();
    await loading.present();

    this.firebaseSvc.singIn(this.form.value as User).then((res) =>{
      this.getUserInfo(res.user.uid);
    }).catch((error) =>{
      console.log(error);
      this.utilsSvc.presentToast({
        message: error.message,
        duration: 2500,
        color:'dark',
        position:'middle',
        icon:'alert-circle-outline',
      });
    }).finally(() =>{
      loading.dismiss();
    });
  }
}
    //==== Obtener datos del usuario, aplicacion del loading y del ===

    async getUserInfo(uid: string) {
      if (this.form.valid) {
        const loading = await this.utilsSvc.loading();
        await loading.present();
    
        const path = `users/${uid}`;
    
        this.firebaseSvc
          .getDocument(path)
          .then((data) => {
            if (data) { // Verificamos si data no es undefined
              const user = data as User; // Hacemos un casting a User si estamos seguros de que es del tipo correcto
              this.utilsSvc.saveInLocalStorage('user', user);
              this.utilsSvc.routerLink('/home');
              this.form.reset();
    
              this.utilsSvc.presentToast({
                message: `Te damos la bienvenida ${user.name}`,
                duration: 1500,
                color: 'dark',
                position: 'middle',
                icon: 'person-circle-outline',
              });
            } else {
              throw new Error("Usuario no encontrado.");
            }
          })
          .catch((error) => {
            console.log(error);
            this.utilsSvc.presentToast({
              message: error.message,
              duration: 2500,
              color: 'danger',
              position: 'middle',
              icon: 'alert-circle-outline',
            });
          })
          .finally(() => {
            loading.dismiss();
          });
      }
    }
    
}