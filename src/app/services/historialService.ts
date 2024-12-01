import {Injectable} from "@angular/core";
import {Firestore,collection, collectionData,query} from "@angular/fire/firestore"
import { Observable } from "rxjs";




@Injectable({
    providedIn:"root"
})


export class HistorialService{

    constructor(private firestore:Firestore){}

    obtenerRegistroGatos(){
        const registroRef = collection(this.firestore,"cats")
        const refquery = query(registroRef)
        return collectionData(refquery)
    }

    obtenerRegistroPerros(){
        const registroRef = collection(this.firestore,"dogs")
        const refquery = query(registroRef)
        return collectionData(refquery)
    }


}