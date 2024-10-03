import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  // <- Aquí está la importación de BehaviorSubject

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private formDataSubject = new BehaviorSubject<any>(null);
  formdata$ = this.formDataSubject.asObservable();

  updateData(data: any) {
    this.formDataSubject.next(data); // Actualiza los datos en la suscripción
  }
}
