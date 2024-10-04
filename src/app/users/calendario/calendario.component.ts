import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {


  monto: number = 0;
  interes: number = 0;
  plazo: number = 0; 
  pago: number = 0;
  total: number = 0;
  deudaCancelada: boolean = false;
  pagosMensuales: { fecha: Date, monto: number, pagado: boolean }[] = [];

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.paymentData$.subscribe(data => {
      this.monto = data.monto;
      this.interes = data.interes;
      this.plazo = data.plazo; 
      this.total = this.monto + this.interes;

      if (this.plazo > 0) {
        this.pago = this.total / this.plazo;
        this.generarPagosMensuales();
      } else {
        this.pago = 0;
        this.pagosMensuales = [];
      }
    });
  }

  generarPagosMensuales() {
    this.pagosMensuales = [];
    let fechaActual = new Date();
    for (let i = 1; i <= this.plazo; i++) {
      const fechaPago = new Date(fechaActual);
      fechaPago.setMonth(fechaActual.getMonth() + i);
      this.pagosMensuales.push({
        fecha: fechaPago,
        monto: this.pago,
        pagado: false // Inicializamos todos los pagos como no pagados
      });
    }
  }

  pagarMes(index: number) {
    if (!this.pagosMensuales[index].pagado) {
      this.pagosMensuales[index].pagado = true;
      console.log(`Pago realizado para el mes ${index + 1}`);
      this.verificarDeudaCancelada();
    }
  }

  verificarDeudaCancelada(){
    const deudaPagada = this.pagosMensuales.every (pago=> pago.pagado)
    if(deudaPagada){
      this.deudaCancelada = true

    }
    
  }

  borrarDatos(){
    if(this.deudaCancelada){
      this.monto = 0;
      this.interes = 0;
      this.pago = 0;
      this.plazo = 0;
      this.total = 0;

      console.log("Eliminado");
      
    }
  }
}


