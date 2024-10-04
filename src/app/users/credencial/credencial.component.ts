import { Component, OnInit } from '@angular/core';
import { UserService } from '../service-data/user.service';
import { DataSharingService } from '../services/data-sharing.service';
import { log } from 'console';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {
  
  receivedData: any = {
    name: '',
    telefono: '',
    email: '',
    direccion: '',
    id: ''
  };

  monto: number = 0; 
  plazo: number = 0; 
  interes: number = 0;
  modalVisible : boolean = false

  constructor(private userService: UserService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
   
    this.userService.formdata$.subscribe(data => {
      if (data) {
        this.receivedData = data; 
      }

      
    });
    
    console.log(this.receivedData);
    
  }
  abrirModal(){
    this.modalVisible = true
  }

  cerrarModal(){
    this.modalVisible = false
  }

  calcularInteres() {
 
    this.interes = this.monto * 0.10; 
  }

  onMontoChange(event: any) {
    this.monto = parseFloat(event.target.value) || 0; 
    this.calcularInteres(); 
  }

  onPlazoChange(event: any) {
    this.plazo = parseInt(event.target.value) || 0; 
    this.calcularInteres(); 
  }

  onGuardar() {
    
    this.dataSharingService.updatePaymentData(this.monto, this.interes, this.plazo); 
    alert('Datos guardados con éxito');
    
  }

  borrarDatos(){
    this.receivedData = {
      name: "" ,
      telefono: "",
      email : "",
      direccion : "",
      id : ""
    }
  }


  guardarCambios() {
    this.userService.updateData(this.receivedData); // Actualiza los datos en el servicio
    console.log('Datos personales actualizados:', this.receivedData);
    alert('Datos personales actualizados con éxito');
    this.cerrarModal();
  }
  }



