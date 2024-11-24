import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAsistenciaPage } from './centro-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAsistenciaPage,  // Componente principal de la página
    children: [  // Rutas de los tabs (anidadas)
      {
        path: 'perros',
        loadChildren: () => import('./perros/perros.module').then( m => m.PerrosPageModule)
      },
      {
        path: 'gatos',
        loadChildren: () => import('./gatos/gatos.module').then( m => m.GatosPageModule)
      },
    
      {
        path: 'historial',
        loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
      },
      {
        path: 'veterinario',
        loadChildren: () => import('./veterinario/veterinario.module').then( m => m.VeterinarioPageModule)
      },
     
      {
        path: '', // Ruta por defecto
        redirectTo: '/centro-asistencia/perros', // Redirigir a la primera tab
        pathMatch: 'full' 
      }
    ]
  },
  





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAsistenciaPageRoutingModule {}