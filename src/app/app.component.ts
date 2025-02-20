import { Component } from '@angular/core';
import { ListadoClientesComponent } from './componentes/listado-clientes/listado-clientes.component';

@Component({
  selector: 'app-root',
  imports: [ListadoClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
