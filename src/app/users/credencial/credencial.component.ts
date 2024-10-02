import { Component, OnInit } from '@angular/core';
import { UserService } from '../service-data/user.service';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.css']
})
export class CredencialComponent implements OnInit {
  receivedData: any;

  constructor(private userService: UserService) {} // Inyecta el servicio

  ngOnInit() {
    this.userService.formdata$.subscribe(data => {
      this.receivedData = data; // Asigna los datos recibidos
    });
  }
}
