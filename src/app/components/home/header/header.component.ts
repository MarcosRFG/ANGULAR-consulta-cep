import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private estaLogado: boolean = false;

  constructor(private _loginService : LoginService) { }

  ngOnInit() {
    this._loginService.$estaLogado.subscribe(res =>{
      this.estaLogado = res;
    });
  }

  logout(){
    this._loginService.logout();
  }
}
