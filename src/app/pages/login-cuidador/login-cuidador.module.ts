import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginCuidadorPage } from './login-cuidador.page';
import { SharedModule } from '../../shared/shared.module'; // Caminho para o SharedModule
import { LoginCuidadorPageRoutingModule } from './login-cuidador-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCuidadorPageRoutingModule,
    SharedModule
  ],
  declarations: [LoginCuidadorPage]
})
export class LoginCuidadorPageModule {}
