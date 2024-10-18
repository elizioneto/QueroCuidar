import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCuidadorPageRoutingModule } from './login-cuidador-routing.module';

import { LoginCuidadorPage } from './login-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCuidadorPageRoutingModule
  ],
  declarations: [LoginCuidadorPage]
})
export class LoginCuidadorPageModule {}
