import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Cliente } from '../../modelos/Cliente';

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

  public cliente:Cliente | null;  // variable que almacenará los datos del formulario como un objeto Cliente

  public contadorID:number;  // variable que asignara cada ID al cliente

  // metodo constructor
  constructor() {
    this.id = new FormControl(-1);
    this.nombre = new FormControl("");
    this.cif = new FormControl("");
    this.direccion = new FormControl("");
    this.grupo = new FormControl("");

    this.formulario = new FormGroup({ id:this.id , nombre:this.nombre , cif:this.cif , direccion:this.direccion , grupo:this.grupo });

    this.cliente = null;

    this.contadorID = 1;
  }

  // metodo para enviar los datos del cliente
  public enviarFormulario(event: Event):void{

    // si no estan rellenados los campos no se envia el formulario y salta un mensaje de aviso
    if(this.nombre.value.trim() == "" || this.cif.value.trim() == ""  || this.direccion.value.trim() == "" || this.grupo.value.trim() == ""){
      alert("Rellene todos los campos para enviar el formulario.");
      event.preventDefault();
    }
    else{
      this.cliente = new Cliente( this.contadorID , this.nombre.value.trim() , this.cif.value.trim() , this.direccion.value.trim() , this.grupo.value.trim() );  // creo un objeto Cliente
      this.contadorID++; // incremento el contador de IDs
      this.cliente=null; // restablecemos la variable cliente como null
      this.formulario.setValue({id:-1, nombre: "", cif: "", direccion: "", grupo: ""}); // reiniciamos los valores del formulario (con reset da error con el trim)
    }
  }
}
