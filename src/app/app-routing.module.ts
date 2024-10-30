import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noAuthGuard } from './guards/no-auth.guard';
import { authGuard } from './guards/auth.guard';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule),
    canActivate: [noAuthGuard],
  },
 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.SeleccionMascotaModule),
    canActivate: [authGuard],
    
  },
  {
    path: 'registro-perros',
    loadChildren: () => import('./pages/registro-perros/registro-perros.module').then(m => m.RegistroPerrosModule),
    canActivate: [authGuard],
  },
  {
    path: 'registro-gatos',
    loadChildren: () => import('./pages/registro-gatos/registro-gatos.module').then( m => m.RegistroGatosPageModule),
    canActivate: [authGuard],
  },

  {
    path: 'restore',
    loadChildren: () => import('./pages/auth/restore/restore.module').then(m => m.RestorePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'centro-asistencia',
    loadChildren: () => import('./pages/centro-asistencia/centro-asistencia.module').then( m => m.CentroAsistenciaPageModule),
    canActivate: [authGuard],
  },
  //=====Siempre va al final, permnite redirigir a una pagina de error====
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
