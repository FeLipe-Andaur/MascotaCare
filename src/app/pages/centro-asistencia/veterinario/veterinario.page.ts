import { Component} from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.page.html',
  styleUrls: ['./veterinario.page.scss'],
})
export class VeterinarioPage {

  map!:L.Map

  latitude: number | null = null;
  longitude: number | null = null;

  constructor() { }
  

  ionViewDidEnter(){
      this.getCurrentPosition()
  
  }
    
  

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
  
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
  
      console.log(`Latitud: ${this.latitude}, Longitud: ${this.longitude}`);
  
      // Verifica si el mapa ya está inicializado y, si es así, remuévelo
      if (this.map) {
        this.map.remove();
      }
  
      // Inicializa el mapa en el contenedor 'mapId'
      this.map = L.map('mapId').setView([this.latitude, this.longitude], 6);
      
      // Agrega la capa de OpenStreetMap
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
  
      // Agrega un marcador en la ubicación actual
      const markPoint = L.marker([this.latitude, this.longitude]);
      this.map.addLayer(markPoint);
  
    } catch (error) {
      console.error('Error obteniendo la ubicación', error);
    }
    // try {
    //   const position = await Geolocation.getCurrentPosition();
      
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;

    //   console.log(`Latitud: ${this.latitude}, Longitud: ${this.longitude}`);
    //   this.map= L.map('mapId').setView([this.latitude!,this.longitude!],6);
    //   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   }).addTo(this.map);
    //   const markPoint = L.marker([this.latitude!,this.longitude!])
    //   this.map.addLayer(markPoint)
    // } catch (error) {
    //   console.error('Error obteniendo la ubicación', error);
    // }
  }
}
