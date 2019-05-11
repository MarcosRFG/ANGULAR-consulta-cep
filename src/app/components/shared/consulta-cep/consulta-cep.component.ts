import { ConsultaCepService } from '../../../services/consulta-cep/consulta-cep.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgModel } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import { Endereco } from '../../../models/Endereco'

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.css']
})
export class FormRequestApiComponent implements OnInit {

  cep : string = '';
  cepInvalido : boolean;
  cepCom8Dig : boolean = false;
  endereco : Endereco;
  lenghtCep : number;

  constructor(
    private _consultaCepService : ConsultaCepService,
    private _formBuilder : FormBuilder
  ){ 
    this.endereco = new Endereco (null,'','','','');
  }

  ngOnInit(){
  }

  chamaServicoApiCorreios(): void{
    if(this.cep.length < 8){
      this.cepCom8Dig = false;
      this.cepInvalido = false;
    }

    if(this.cep.length === 8){
      this._consultaCepService.requisitaApi(this.cep)
        .subscribe(data =>{
          if(!data.erro){
            this.cepInvalido = false;
            this.cepCom8Dig = true;
            
            this.endereco.cep = this.cep;
            this.endereco.rua = data.logradouro;
            this.endereco.bairro = data.bairro;
            this.endereco.cidade = data.localidade;
            this.endereco.estado = data.uf;
          }else{
            this.cepInvalido = true;
          }
      });
  }
}

}
