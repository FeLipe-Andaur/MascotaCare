import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { UtilsService } from './utils.service';
import {createUserWithEmailAndPassword, getAuth, updateProfile, sendPasswordResetEmail, signInWithEmailAndPassword, } from 'firebase/auth';
import { User } from '../models/user.model';
import {getFirestore,setDoc,doc,getDoc,addDoc,collection,collectionData,query,updateDoc,deleteDoc,} from '@angular/fire/firestore';
import {getStorage,uploadString,ref,getDownloadURL,deleteObject,} from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  signIn: any;
  updateUser(name: string | null | undefined) {
    throw new Error('Method not implemented.');
  }
  auth = inject(AngularFireAuth);
  utilsSvc = inject(UtilsService);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);

  //==== Autenticación ====

  //----Obtener instancia de autenticación para guards----

  getAuth(){
    return getAuth();
  }

  //---- Iniciar sesión ----

  singIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //-----Registrar usuario----

  singUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //----Actualizar perfil----
 
  

   //------ Enviar correo de recuperacion ------
   sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email)
  }

  //------ Cerrar sesión ------
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth')
  }

  //===== Base de datos=====

  //***** Documentos de una Colección****  
    getCollectionData(path: string, collectionQuery?: any) {
      const ref = collection(getFirestore(), path);
      return collectionData(query(ref, collectionQuery), { idField: 'id' });
    }

    //----- Setear un documento -----//
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //----- Obtener un documento -----//
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
   // =====  Método para actualizar un documento =====
   updateDocument(path: string, data: any) {
    return updateDoc(doc(getFirestore(), path), data);
  }

  //----- Eliminar un documento -----//
  deleteDocument(path: string) {
    return deleteDoc(doc(getFirestore(), path));
  }

  //----- Agregar un documento -----//
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  //===== Almacenamiento con fireStorage =====//

  //----- Subir imagen -----//
  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(
      () => {
        return getDownloadURL(ref(getStorage(), path));
      }
    );
  }

  //----- Obtener ruta de la imagen con su URL para reemplazar la imagen existente en firestorage -----//
  async getFilePath(url: string) {
    return ref(getStorage(), url).fullPath;
  }

  //----- Eliminar archivo de firestorage -----//
  deleteFile(path: string) {
    return deleteObject(ref(getStorage(), path));
  }
}