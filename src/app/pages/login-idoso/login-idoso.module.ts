import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIdosoPageRoutingModule } from './login-idoso-routing.module';

import { LoginIdosoPage } from './login-idoso.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIdosoPageRoutingModule,
    SharedModule
  ],
  declarations: [LoginIdosoPage]
})
export class LoginIdosoPageModule {}
