import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  pais = [
    {
      codigo: "CLP",
      nombre: "Chile"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }
  ]


  sexos: string[] = ["Hombre", "Mujer"]

  constructor() { }

  guardar( forma:NgForm ){
    console.log("formulario: ", forma);
    console.log("form value: ", forma.value);
    console.log("usuario: ", this.usuario);
  }

}
