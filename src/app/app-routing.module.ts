import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.SeleccionMascotaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registro-perros',
    loadChildren: () => import('./pages/registro-perros/registro-perros.module').then(m => m.RegistroPerrosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registro-gatos',
    loadChildren: () => import('./pages/registro-gatos/registro-gatos.module').then( m => m.RegistroGatosPageModule)
  },

  {
    path: 'restore',
    loadChildren: () => import('./pages/restore/restore.module').then(m => m.RestorePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
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
    loadChildren: () => import('./pages/centro-asistencia/centro-asistencia.module').then( m => m.CentroAsistenciaPageModule)
  },
  //Siempre va al final, permnite redirigir a una pagina de error
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
