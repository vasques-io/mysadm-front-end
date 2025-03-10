import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // Aplica o layout principal às páginas
    children: [
      { path: '', component: HomeComponent }, // Página inicial
      { path: 'dashboard', component: DashboardComponent } // Dashboard
    ]
  },
  { path: '**', redirectTo: '' } // Redireciona páginas inexistentes para Home
];
