import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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

  @Output() mandarCliente:EventEmitter<Cliente> = new EventEmitter<Cliente>;  // evento emisor para mandar el cliente al listado (padre)

  @Input() public clienteActualizar:Cliente | undefined = undefined; // varaible que recibe del listado (padre) los datos de un cliente

  public controlBotones:boolean;  // variable para controlar la habilitacion de los botones

  @Output() botonesLista:EventEmitter<boolean> = new EventEmitter<boolean>;  // evento emisor para mandar el boolean al listado (padre)

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

    this.controlBotones = false;
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
      this.mandarCliente.emit(this.cliente); // emitimos el evento con el cliente seleccionado
      this.cliente=null; // restablecemos la variable cliente como null
      this.formulario.setValue({id:-1, nombre: "", cif: "", direccion: "", grupo: ""}); // reiniciamos los valores del formulario (con reset da error con el trim)
    }
  }

  // metodo que modifica el formulario cuando se ha recibido la informacion del cliente
  ngOnChanges(cambios:SimpleChanges){
    if( cambios["clienteActualizar"] && this.clienteActualizar != undefined ){
      this.formulario.setValue({
        id: cambios["clienteActualizar"].currentValue.id, 
        nombre: cambios["clienteActualizar"].currentValue.nombre, 
        cif: cambios["clienteActualizar"].currentValue.cif, 
        direccion: cambios["clienteActualizar"].currentValue.direccion, 
        grupo: cambios["clienteActualizar"].currentValue.grupo
      });
    }
  }

  public cancelarEdicion():void{
    this.clienteActualizar = undefined;
    this.formulario.setValue({id:-1, nombre: "", cif: "", direccion: "", grupo: ""});
    this.controlBotones = false;
    this.botonesLista.emit(this.controlBotones);
  }
}
