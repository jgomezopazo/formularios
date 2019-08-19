import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario:Object = {
    nombre: "Jorge",
    apellido: "Gomez",
    email: ""
  }

  constructor() { }

  guardar( forma:NgForm ){
    console.log("formulario: ", forma);
    console.log("form value: ", forma.value);
    console.log("usuario: ", this.usuario);
  }

}
