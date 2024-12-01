import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/APIService';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {
  
  data:any= []
  sectionOpen: string | null = null; 
  openedDetails: Map<string, Set<string>> = new Map(); 

  enfermedades = []
  auxilios = []
  consejos = []
  comportamientos = []
  vacunas = []

  constructor(private dataAPI:APIService) {}

  ngOnInit() {
    this.cargarDataPerros()
  }

  // Método para abrir o cerrar la sección seleccionada
  toggleSection(section: string) {
    // Permite abrir o cerrar la sección
    this.sectionOpen = this.sectionOpen === section ? null : section;
  }

  // Verifica si una sección está abierta
  isSectionOpen(section: string): boolean {
    return this.sectionOpen === section;
  }

  // Método para abrir o cerrar los detalles de los ítems
  toggleDetail(detail: string, section: string) {
    if (!this.openedDetails.has(section)) {
      this.openedDetails.set(section, new Set());
    }

    const detailsSet = this.openedDetails.get(section)!;
    
    if (detailsSet.has(detail)) {
      detailsSet.delete(detail); // Cierra el detalle
    } else {
      detailsSet.add(detail); // Abre el detalle
    }
  }

  // Verifica si un detalle está abierto
  isDetailOpen(detail: string, section: string): boolean {
    return this.openedDetails.has(section) && this.openedDetails.get(section)!.has(detail);
  }

  exampleOpen: Set<string> = new Set(); 
  toggleExample(example: string) {
    if (this.exampleOpen.has(example)) {
      this.exampleOpen.delete(example);
    } else {
      this.exampleOpen.add(example);
    }
  }

  isExampleOpen(example: string): boolean {
    return this.exampleOpen.has(example);
  }

  cargarDataPerros(){
    this.dataAPI.ObtenerDataPerros().subscribe(
      (response)=>{
        this.data = response;
        this.enfermedades = response[0].enfermedades
        this.auxilios = response[1].Auxilios
        this.consejos = response[2].cuidados
        this.comportamientos = response[3].comportamientos
        this.vacunas = response[4].tipos
      },
      (error) =>{
        console.error("Error al obtener la data")
      }
    )
  }
}
