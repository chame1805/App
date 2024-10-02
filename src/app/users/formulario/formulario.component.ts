import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service-data/user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'] // Corregido: debe ser styleUrls
})
export class FormularioComponent {
  formData: FormGroup;
  currentId: number = 1;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Validación de email
      direccion: ['', Validators.required],
      id: [{ value: '', disabled: true }, Validators.required]
    });
  }

  onSubmit() {
    if (this.formData.valid) {
      this.formData.patchValue({ id: this.currentId }); // Asigna currentId al campo id
      this.userService.updateData(this.formData.value); // Envía los datos al servicio
      this.currentId++; // Incrementa el ID
      this.formData.reset(); // Resetea el formulario si es necesario
    }
  }
}
