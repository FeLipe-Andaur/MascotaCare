import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
 
export class APIService {
    private baseUrlGatos = "http://localhost:3000/api/gatos"
    private baseUrlPerros = "http://localhost:3000/api/perros"

    constructor(private http: HttpClient) {}

    ObtenerDataGatos() {
      const url = this.baseUrlGatos;
      return this.http.get(url);
    }

    ObtenerDataPerros() {
      const url = this.baseUrlPerros;
      return this.http.get(url);
    }
}