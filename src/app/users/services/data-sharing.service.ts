import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private paymentDataSubject = new BehaviorSubject<{ monto: number, interes: number, plazo: number }>({
    monto: 0,
    interes: 0,
    plazo: 0
  });
  paymentData$ = this.paymentDataSubject.asObservable();

  updatePaymentData(monto: number, interes: number, plazo: number) {
    this.paymentDataSubject.next({ monto, interes, plazo }); // Actualiza los datos
  }
}
