import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ConsultaCepService {

  constructor(private _http : Http) { 

  }

  requisitaApi(cep){
    // console.log('servico "requisitaApi"')

    return this._http.get('https://viacep.com.br/ws/'+ cep +'/json/')
      .map( res => res.json())
  }
}
