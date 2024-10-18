import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCuidadorPage } from './login-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCuidadorPageRoutingModule {}
