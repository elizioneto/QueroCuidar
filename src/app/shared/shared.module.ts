import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeadComponent } from '../componentes/head/head.component';
import { LoginComponent } from '../componentes/login/login.component';

@NgModule({
  declarations: [HeadComponent, LoginComponent],  // Declara os componentes compartilhados
  imports: [CommonModule, IonicModule],
  exports: [HeadComponent, LoginComponent]  // Exporta para uso em outros módulos
})
export class SharedModule {}
