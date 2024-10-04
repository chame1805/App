import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {

  heade = 0

  headers = [
    {
      title: "Inicio"

    },{
      title:"registro"
    },
    {
      title:"pago"
    }
  ]
}
