import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioClientePageRoutingModule } from './inicio-cliente-routing.module';

import { InicioClientePage } from './inicio-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioClientePageRoutingModule
  ],
  declarations: [InicioClientePage]
})
export class InicioClientePageModule {}
