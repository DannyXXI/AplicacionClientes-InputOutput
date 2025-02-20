import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-cliente.component.html',
  styleUrl: './formulario-cliente.component.css'
})
export class FormularioClienteComponent {
  public formulario:FormGroup;  // variable que se le asigna al formulario

  // variables para los campos del formulario
  public id:FormControl;
  public nombre:FormControl;
  public cif:FormControl;
  public direccion:FormControl;
  public grupo:FormControl;


  // metodo constructor
  constructor() {
    this.id = new FormControl(-1);
    this.nombre = new FormControl("");
    this.cif = new FormControl("");
    this.direccion = new FormControl("");
    this.grupo = new FormControl("");

    this.formulario = new FormGroup({ id:this.id , nombre:this.nombre , cif:this.cif , direccion:this.direccion , grupo:this.grupo });
  }
}
