import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "Jorge",
      apellido: "Gomez"
    },
    email: "jg@mail.com"

  }

  constructor() {
    console.log("usuario: ", this.usuario);
    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [Validators.required, this.nogomez]),
      }),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
        new FormControl("correr", Validators.required)
      ]),
      username: new FormControl("", Validators.required, this.existeUsuario),
      password1: new FormControl("", Validators.required),
      password2: new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);


    this.forma.controls['username'].valueChanges.subscribe((
      data) => {
      console.log(data);
    });

    this.forma.controls['username'].statusChanges.subscribe(
      (data)=> {
        console.log(data);
      });
    //this.forma.setValue( this.usuario );
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    //this.forma.reset();
  }

  agregarNuevo() {

    (this.forma.controls['pasatiempos'] as FormArray).push(
      new FormControl("dormir", Validators.required)
    )
  }

  nogomez(control: FormControl): { [s: string]: boolean } {

    if (control.value === "gomez") {
      return {
        nogomez: true
      }
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    console.log("this: ", this);
    let forma: any = this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noigual: true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {

    let promesa = new Promise(
      (resolve, reject) => {

        setTimeout(() => {
          if (control.value === "strider") {
            resolve({ existe: true })
          } else { resolve(null) }
        }, 3000)
      })

    return promesa;

  }

}
