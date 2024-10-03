import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service-data/user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData: FormGroup;
  currentId: number = 1;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      id: ['']
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      this.formData.patchValue({ id: this.currentId }); // Asigna el currentId al campo ID
      this.userService.updateData(this.formData.getRawValue()); // Envía los datos al servicio
      this.currentId++; // Incrementa el ID para el próximo envío
      this.formData.reset(); // Resetea el formulario
    }
  }
}
