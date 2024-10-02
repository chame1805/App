import { Component } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']  // Nota: es 'styleUrls', no 'styleUrl'
})
export class VistaComponent {

  img = 0;

  imagen = [
    {
      image: 'cas.jpg'  // Asegúrate de usar la ruta correcta
    }
  ];

}
