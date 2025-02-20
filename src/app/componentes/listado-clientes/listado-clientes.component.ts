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
    this.listaClientes.push(e);
  }

  // metodo para mandar el cliente a editar al formulario
  public editarCliente(id:number){
    this.clienteAEditar = this.listaClientes.find( cliente => cliente.id == id); // buscamos el cliente con el id
    this.botonesDeshabilitados=true;
    console.log(this.clienteAEditar);
  }
}
