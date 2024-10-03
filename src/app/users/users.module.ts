import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { RaizComponent } from './raiz/raiz.component';
import { VistaComponent } from './vista/vista.component';
import { CredencialComponent } from './credencial/credencial.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarioComponent } from './calendario/calendario.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FormularioComponent,
    RaizComponent,
    VistaComponent,
    CredencialComponent,
    CalendarioComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[
  RaizComponent
  ]
})
export class UsersModule { }
