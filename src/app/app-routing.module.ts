import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login-cuidador',
    loadChildren: () => import('./pages/login-cuidador/login-cuidador.module').then(m => m.LoginCuidadorPageModule)
  },
  {
    path: 'login-idoso',
    loadChildren: () => import('./pages/login-idoso/login-idoso.module').then(m => m.LoginIdosoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
