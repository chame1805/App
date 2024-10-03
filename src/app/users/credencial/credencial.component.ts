import { Component, OnInit } from '@angular/core';
import { UserService } from '../service-data/user.service';
import { DataSharingService } from '../services/data-sharing.service';

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

  monto: number = 0; // Monto ingresado
  plazo: number = 0; // Plazo seleccionado
  interes: number = 0; // Interés calculado

  constructor(private userService: UserService, private dataSharingService: DataSharingService) {}

  ngOnInit() {
    // Suscripción para recibir los datos del formulario
    this.userService.formdata$.subscribe(data => {
      if (data) {
        this.receivedData = data; // Actualiza los datos cuando se envía el formulario
      }
    });
  }

  calcularInteres() {
    // Calcular el interés mensual (10% del monto ingresado)
    this.interes = this.monto * 0.10; // 10% de interés
  }

  onMontoChange(event: any) {
    this.monto = parseFloat(event.target.value) || 0; // Actualiza el monto
    this.calcularInteres(); // Recalcula el interés cuando cambia el monto
  }

  onPlazoChange(event: any) {
    this.plazo = parseInt(event.target.value) || 0; // Actualiza el plazo
    this.calcularInteres(); // Recalcula el interés cuando cambia el plazo
  }

  onGuardar() {
    // Almacena el monto, interés y plazo en el servicio compartido
    this.dataSharingService.updatePaymentData(this.monto, this.interes, this.plazo); // Envía también el plazo
    alert('Datos guardados con éxito'); // Mensaje de éxito (opcional)
  }
}
