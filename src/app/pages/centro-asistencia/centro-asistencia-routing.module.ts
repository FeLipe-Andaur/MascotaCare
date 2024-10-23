import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAsistenciaPage } from './centro-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAsistenciaPage,  // Componente principal de la página
    children: [  // Rutas de los tabs (anidadas)
      {
        path: 'enfermedades-comunes',
        loadChildren: () => import('./enfermedades-comunes/enfermedades-comunes.module').then( m => m.EnfermedadesComunesPageModule)
      },
      {
        path: 'lesiones',
        loadChildren: () => import('./lesiones/lesiones.module').then( m => m.LesionesPageModule)
      },
      {
        path: 'ataques',
        loadChildren: () => import('./ataques/ataques.module').then( m => m.AtaquesPageModule)
      },
      {
        path: 'envenenamiento',
        loadChildren: () => import('./envenenamiento/envenenamiento.module').then( m => m.EnvenenamientoPageModule)
      },
      {
        path: 'veterinarios-cercanos',
        loadChildren: () => import('./veterinarios-cercanos/veterinarios-cercanos.module').then( m => m.VeterinariosCercanosPageModule)
      },
      {
        path: '', // Ruta por defecto
        redirectTo: '/centro-asistencia/enfermedades-comunes', // Redirigir a la primera tab
        pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAsistenciaPageRoutingModule {}