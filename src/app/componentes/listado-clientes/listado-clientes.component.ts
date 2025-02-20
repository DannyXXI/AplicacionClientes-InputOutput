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

  constructor() {
    this.listaClientes = [];
  }

  // metodo para recibir el cliente del formulario (hijo)
  public recibirCliente(e:Cliente):void {
    this.listaClientes.push(e);
  }
}
