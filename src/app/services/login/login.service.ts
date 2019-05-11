import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

  private urlApi = 'http://localhost:3000/login';
  private opcoesHttp = { headers: new HttpHeaders({'Content-Type':'application/json'})}
  public $estaLogado: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http : Http, private _conexaoApi: HttpClient, private router: Router) { }

  public logar(usuario, senha): Observable<any> {
    // como não há API, será mockado um retorno positivo
    // return this._conexaoApi.get(this.urlApi+'/'+usuario+'/'+senha);

    return Observable.of({ msg: 'sucesso'});
  }

  public setaLoginSucesso(): void {
    this.$estaLogado.next(true);
  }

  public logout(): void {
    this.$estaLogado.next(false);
    this.router.navigate(['/login']);
  }

  public retornaSeEstaLogado(): BehaviorSubject<boolean> {
    return this.$estaLogado;
  }
}
