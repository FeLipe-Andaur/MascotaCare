import { Component,OnInit } from '@angular/core';
import { APIService } from 'src/app/services/APIService';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
})

export class GatosPage implements OnInit{
  

  data:any = []
  enfermedades = []
  auxilios = []
  consejos = []
  comportamientos = []

  sectionOpen: string | null = null;
  exampleOpen: { [key: string]: boolean } = {};
  detailOpen: { [key: string]: { [key: string]: boolean } } = {};

  constructor(private dataAPI:APIService) {}

  ngOnInit(){
    this.cargarDataGatos()
  }

  toggleSection(section: string) {
    this.sectionOpen = this.sectionOpen === section ? null : section;
  }

  toggleExample(example: string) {
    this.exampleOpen[example] = !this.exampleOpen[example];
  }

  isExampleOpen(example: string): boolean {
    return this.exampleOpen[example] || false;
  }

  toggleDetail(detail: string, section: string) {
    if (!this.detailOpen[section]) {
      this.detailOpen[section] = {};
    }
    this.detailOpen[section][detail] = !this.detailOpen[section][detail];
  }

  isDetailOpen(detail: string, section: string): boolean {
    return this.detailOpen[section]?.[detail] || false;
  }

  cargarDataGatos(){
    this.dataAPI.ObtenerDataGatos().subscribe(
      (response)=>{
        this.data = response;
        this.enfermedades = response[0].enfermedades
        this.auxilios = response[1].Auxilios
        this.consejos = response[2].cuidados
        this.comportamientos = response[3].comportamientos
      },
      (error) =>{
        console.error("Error al obtener la data")
      }
    )
  }

  
}
