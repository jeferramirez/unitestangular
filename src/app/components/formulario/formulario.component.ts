import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {

    this.formGroup = this.fb.group(
      {

        nombre: ['',  [Validators.required]],
        apellido: ['',  [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]]

      }
    );
  }


  guardardatos() {

    console.log(this.formGroup.controls['nombre'].setValue('a'));
    console.log(this.formGroup.value);
  }

  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { ...error, dollar: 'needs a dollar symbol' };
    }
    if (!parseFloat(password[0])) {
      error = { ...error, number: 'must start with a number' };
    }
    return error;
  }


  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);

    if (control.touched && control.errors != null) {
      if (control.hasError('required')) {
        error = 'El campo es obligatorio.';
      }
      if (control.hasError('minlength')) {
        error = `El campo debe contener minimo ${control.getError('minlength').requiredLength} caracteres`;
      }
    }
    return error;
  }


}
