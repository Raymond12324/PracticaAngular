import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes,Grupo } from 'src/app/models/clientes.model';
@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.css']
})
export class AltaClientesComponent implements OnInit {

  AltaForm : FormGroup;


  constructor(private _builder : FormBuilder,public _ClienteService:ClientesService) {
    this.AltaForm = this._builder.group({
      id:[1,Validators.required],
      nombre:['',Validators.required],
      cif:['',Validators.required],
      direccion:['',Validators.required],
      grupo:'Sin Definir'
    })

  }

  ngOnInit(): void {

  }

  Enviar(value){
    let AumetaId =  this.AltaForm.get('id').value;
    this.AltaForm.get('id').setValue(AumetaId + 1);
    this._ClienteService.agregarClientes(value);
    console.log(value);

  }


  cambiarGrupo(event) {
   this.AltaForm.get('grupo').setValue(event.target.value)
  }






}
