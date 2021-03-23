import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaClientesComponent } from './alta-clientes/alta-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';



@NgModule({
  declarations: [AltaClientesComponent, ListaClientesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AltaClientesComponent,
    ListaClientesComponent
  ]
})
export class ClientesModule { }
