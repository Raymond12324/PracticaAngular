import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes.model';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public clientes:Clientes[];

  constructor(public _ClienteService:ClientesService) {
    this.clientes = [];
   }

  ngOnInit(): void {
      this._ClienteService.getClientes$().subscribe(data => {
      this.clientes = data;
    });
  }

}
