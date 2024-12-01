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
      const markPointVeterinario1 = L.marker([-33.0346114,-71.5249221])
      const markPointVeterinario2 = L.marker([-33.0296242,-71.5241762])
      const markPointVeterinario3 = L.marker([-33.0346114,-71.5249221])
      const markPointVeterinario4 = L.marker([-33.0323726,-71.5388879])
      const markPointVeterinario5 = L.marker([-33.032887,-71.5454197])
      const markPointVeterinario6 = L.marker([-33.0302574,-71.5483885])
      const markPointVeterinario7 = L.marker([-33.037782,-71.5425834])

      this.map.addLayer(markPoint);
      this.map.addLayer(markPointVeterinario1);
      this.map.addLayer(markPointVeterinario2);
      this.map.addLayer(markPointVeterinario3);
      this.map.addLayer(markPointVeterinario4);
      this.map.addLayer(markPointVeterinario5);
      this.map.addLayer(markPointVeterinario6);
      this.map.addLayer(markPointVeterinario7);

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
