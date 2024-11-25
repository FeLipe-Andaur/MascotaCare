import { Component, OnInit } from '@angular/core';
import { faDog, faCat, faBars, faLocationDot, faFileWaveform } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from 'src/app/shared/shared.module';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-centro-asistencia',
  templateUrl: './centro-asistencia.page.html',
  styleUrls: ['./centro-asistencia.page.scss'],
  standalone: true,  
  imports: [ 
    SharedModule, 
    IonicModule,
    FontAwesomeModule
    
  ]
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