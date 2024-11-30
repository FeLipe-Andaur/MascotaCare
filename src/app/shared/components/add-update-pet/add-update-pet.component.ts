import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/models/pet.model';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-update-pet',
  templateUrl: './add-update-pet.component.html',
  styleUrls: ['./add-update-pet.component.scss'],
})
export class AddUpdatePetComponent implements OnInit {
  @Input() pet: Pet = {
    id: '',
    image: '',
    name: '',
    age: 0,
    weight: 0,
    raza: '', // Asegúrate de que la propiedad raza esté inicializada
    especie: 'perro', // Inicializa con un valor por defecto
    vacuna: false, // Inicializa con un valor por defecto
    esterilizado: false, 
    proximaVisita: '', 
  };

  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    weight: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    raza: new FormControl('', [Validators.required]), // Agrega el control para la raza
    especie: new FormControl('perro', [Validators.required]), // Agrega el control para la especie
    vacuna: new FormControl(false), // Agrega el control para la vacuna
    esterilizado: new FormControl(false), // Agrega el control para la esterilización
    proximaVisita: new FormControl('', [Validators.required]),
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  user = {} as User;

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
    if (this.pet) {
      this.form.patchValue({
        ...this.pet,
      });
    }
  }

  async takeImage() {
    const dataUrl = (await this.utilsSvc.takePicture('Imagen de la mascota'))?.dataUrl;
    if (dataUrl) this.form.controls.image.setValue(dataUrl);
  }

  submit() {
    if (this.form.valid) {
      if (this.pet) this.updatePet();
      else this.createPet();
    }
  }

  setNumberInputs() {
    let { age, weight } = this.form.controls;
    if (age.value !== null) age.setValue(parseFloat(age.value.toString()));
    if (weight.value !== null) weight.setValue(parseFloat(weight.value.toString()));
  }

  async createPet() {
    const path = `users/${this.user.uid}/pets`;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    const dataUrl = this.form.value.image;
    if (dataUrl) {
      const imagePath = `${this.user.uid}/${Date.now()}`;
      const imageUrl = await this.firebaseSvc.uploadImage(imagePath, dataUrl);
      this.form.controls.image.setValue(imageUrl);
    }

    delete this.form.value.id;

    this.firebaseSvc
      .addDocument(path, this.form.value)
      .then(async () => {
        this.utilsSvc.dismissModal({ success: true });
        this.utilsSvc.presentToast({
          message: 'Mascota añadida exitosamente',
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

  async updatePet() {
    const path = `users/${this.user.uid}/pets/${this.pet.id}`;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    const dataUrl = this.form.value.image;
    if (dataUrl && dataUrl !== this.pet.image) {
      const imagePath = await this.firebaseSvc.getFilePath(this.pet.image);
      const imageUrl = await this.firebaseSvc.uploadImage(imagePath, dataUrl);
      this.form.controls.image.setValue(imageUrl);
    }

    delete this.form.value.id;

    this.firebaseSvc
      .updateDocument(path, this.form.value)
      .then(async () => {
        this.utilsSvc.dismissModal({ success: true });
        this.utilsSvc.presentToast({
          message: 'Mascota actualizada exitosamente',
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
