import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private formdataSource = new BehaviorSubject<any>(null);
  formdata$ = this.formdataSource.asObservable(); // Observable para suscribirse

  updateData(data: any) {
    this.formdataSource.next(data); // Actualiza los datos y notifica a los suscriptores
  }

  constructor() {}
}
