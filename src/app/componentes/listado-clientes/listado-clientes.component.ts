import { Component } from '@angular/core';
import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';
import { Cliente } from '../../modelos/Cliente';

@Component({
  selector: 'app-listado-clientes',
  imports: [FormularioClienteComponent],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  public listaClientes:Cliente[];  // array que contiene la lista de clientes

  public botonesDeshabilitados:boolean; // variable para inhabiliatar los botones cuando se entre en modo edicion de un cliente

  public clienteAEditar:Cliente | undefined; // variable que contendrá el cliente a editar que sera mandado al formulario

  constructor() {
    this.listaClientes = [];

    this.botonesDeshabilitados = false;

    this.clienteAEditar = undefined;
  }

  // metodo para recibir el cliente del formulario (hijo)
  public recibirCliente(e:Cliente):void {

    let clienteExistente = this.listaClientes.find(cliente => cliente.id === e.id);
    
    if (clienteExistente) {
      // si el cliente existe, actualiazo sus datos
      clienteExistente.nombre = e.nombre;
      clienteExistente.cif = e.cif;
      clienteExistente.direccion = e.direccion;
      clienteExistente.grupo = e.grupo;

      //limpio la variable del cliente a editar y habilito los botones
      this.clienteAEditar = undefined;
      this.botonesDeshabilitados = false;
    } else {
      this.listaClientes.push(e);  // si el cliente no existe, le añado a la lista
    }
  }

  // metodo para mandar el cliente a editar al formulario
  public editarCliente(id:number){
    this.clienteAEditar = this.listaClientes.find( cliente => cliente.id == id); // buscamos el cliente con el id
    this.botonesDeshabilitados=true;
  }

  // metodo para el boton de cancelar del formulario de edicion
  public controlBotones(e:boolean){
    this.botonesDeshabilitados = e;
    this.clienteAEditar = undefined;
  }

  // metodo para eliminar un cliente de la lista de clientes
  public borrarCliente(id:number){

    let clienteABorrar = this.listaClientes.find( cliente => cliente.id == id); // buscamos el cliente con el id

    if(clienteABorrar != undefined){
      // mostramos un cuadro de dialogo con dos opciones por si se pulsa accidentalmente
      if ( confirm("¿Desea eliminiar el cliente " + clienteABorrar.nombre + " con CIF " + clienteABorrar.cif + "?") ){

        let nuevalistaClientes = this.listaClientes.filter( cliente => cliente.id !== clienteABorrar.id); // genero una nueva lista de clientes obviando el cliente a eliminar

        this.listaClientes = nuevalistaClientes; // le asignamos la nueva lista a la lista de clientes
      }
    }
  }
}
