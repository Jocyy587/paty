import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'modulo1',
    loadComponent: () => import('./modulo1/modulo1.page').then( m => m.Modulo1Page)
  },  {
    path: 'modulo2',
    loadComponent: () => import('./modulo2/modulo2.page').then( m => m.Modulo2Page)
  },
  {
    path: 'modulo3',
    loadComponent: () => import('./modulo3/modulo3.page').then( m => m.Modulo3Page)
  },

];
