import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Clientes,Grupo } from '../models/clientes.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes$ = new Subject<Clientes[]>();
  private clientes:Clientes[]
  private grupos:Grupo[]

  constructor() {
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }


  getClientes$() :Observable<Clientes[]>{
    return this.clientes$.asObservable();
  }

  getGrupo(){
    return this.grupos;
  }

  agregarClientes(cliente:Clientes){
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes)
  }

}
