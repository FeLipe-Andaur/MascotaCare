import { Component, inject, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model'; 
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { orderBy } from 'firebase/firestore'; 
import { AddUpdatePetComponent } from 'src/app/shared/components/add-update-pet/add-update-pet.component';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  pets: Pet[] = []; 
  loading: boolean = false;

  ngOnInit() {}

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  ionViewWillEnter() {
    this.getPets();
  }

  doRefresh(event: CustomEvent) {
    setTimeout(() => {
      this.getPets();
      event.detail.complete();
    }, 1000);
  }

  getPets() {
    let path = `users/${this.user().uid}/pets`; 
    this.loading = true;
    let query = orderBy('name', 'asc'); // Ordenar por nombre
    let sub = this.firebaseSvc.getCollectionData(path, query).subscribe({
      next: (res: any) => {
        console.log(res);
        this.pets = res;
        this.loading = false;
        sub.unsubscribe();
      },
    });
  }

  async addUpdatePet(pet?: Pet) {
    let success = await this.utilsSvc.presentModal({
      component: AddUpdatePetComponent,
      cssClass: 'add-update-modal',
      componentProps: { pet }, 
    });
    if (success) this.getPets();
  }

  async confirmDeletePet(pet: Pet) {
    this.utilsSvc.presentAlert({
      header: 'Eliminar mascota',
      message: '¿Estás seguro de que deseas eliminar esta mascota?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Eliminar',
          handler: () => this.deletePet(pet),
        },
      ],
    });
  }

  async deletePet(pet: Pet) {
    let path = `users/${this.user().uid}/pets/${pet.id}`;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    // Eliminar la imagen de la mascota de Firebase Storage (si existe)
    if (pet.image) { 
      let imagePath = await this.firebaseSvc.getFilePath(pet.image);
      await this.firebaseSvc.deleteFile(imagePath);
    }

    this.firebaseSvc
      .deleteDocument(path)
      .then(async (res) => {
        this.pets = this.pets.filter((p) => p.id !== pet.id);
        this.utilsSvc.presentToast({
          message: 'Mascota eliminada exitosamente',
          duration: 1500,
          color: 'success',
          position: 'middle',
          icon: 'checkmark-circle-outline',
        });
      })
      .catch((error) => {
        console.log(error);
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline',
        });
      })
      .finally(() => {
        loading.dismiss();
      });
  }
}