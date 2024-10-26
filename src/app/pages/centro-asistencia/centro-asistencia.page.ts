import { Component, OnInit } from '@angular/core';
import { faDog, faCat, faBars, faLocationDot, faFileWaveform } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-centro-asistencia',
  templateUrl: './centro-asistencia.page.html',
  styleUrls: ['./centro-asistencia.page.scss'],
})
export class CentroAsistenciaPage implements OnInit {
  faDog = faDog; 
  faCat = faCat;
  faBars = faBars;
  faLocationDot = faLocationDot;
  faFileWaveform = faFileWaveform;

  constructor() { }

  ngOnInit() {
  }

}
