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
  plazo: number = 0; // Añadir esta propiedad
  pago: number = 0;
  total: number = 0;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.paymentData$.subscribe(data => {
      this.monto = data.monto;
      this.interes = data.interes;
      this.plazo = data.plazo; // Asegúrate de recibir el plazo

      this.total = (this.monto + this.interes)

      // Calcula el pago total (pago mensual total)
      if (this.plazo > 0) {
        this.pago = (this.monto + this.interes) / this.plazo; // Total a pagar dividido por el plazo
      } else {
        this.pago = 0; // Si el plazo no es válido, el pago es 0
      }
    });
  }
}
