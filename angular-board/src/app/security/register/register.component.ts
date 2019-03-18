import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.buildForm();
  }

  // en este metodo definimos el modelo de formulario
  // en el objeto validators nos vienen todas las validaciones predefinidas de angular forms
  private buildForm(){
    const dateLength = 10;
    const today = new Date().toISOString().substring(0, dateLength);
    const name = 'JOHN DOE';
    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({
      registeredOn: today,
      //[valor, validacion o array de validaciones]
      name: [name.toLowerCase(), Validators.required],
      email: ['josemaria.munoz@altia.es', [Validators.email, Validators.required]],
      password: ['', [Validators.required,
        Validators.minLength(minPassLength),
        this.validatePassword]]
    });
  }

  /**
   * Esta función es una funcion de validación custom,
   * si devuelve null, NO ha habido error, si devuelve
   * != null se asume que es un error
   */
  private validatePassword(control: AbstractControl) {
      const password = control.value;
      let error = null;
      if (!password.includes('$')){
        //No es impresicindible devolver un texto, solo cualquier cosa != null, pero es recomendable
        error = {...error, dollar: 'needs a dollar symbol'};
      }
      if(!parseFloat(password[0])){
        error = {...error, number: 'must start with a number'};
      }
      return error;
  }

  public register() {
    //en el value es donde sacamos el valor del formulario
    const user = this.formGroup.value;
    console.log(user);
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    //touched el usuario ha entrado en el control y ha salido
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

}
