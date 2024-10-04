// src/app/general/general.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RaizComponent } from './raiz/raiz.component';
import { VistaComponent } from './vista/vista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { CredencialComponent } from './credencial/credencial.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RaizComponent,
    FormularioComponent,
    CredencialComponent,
    CalendarioComponent,
    VistaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    RaizComponent,
    VistaComponent // Asegúrate de exportar los componentes que usas en AppComponent
  ]
})
export class UserModule { }
