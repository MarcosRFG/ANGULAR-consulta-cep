import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login : string;
  private senha : string;
  private loginFalhou : boolean;

  constructor(
    private _serviceLogin : LoginService, 
    private router: Router
  ) { }

  ngOnInit() {  }

  private logar(usuario, senha): void {
    this._serviceLogin.logar(usuario, senha)
    .subscribe((data : any)=> {
      if(data.msg == 'sucesso'){
        this._serviceLogin.setaLoginSucesso();
        this.router.navigate(['/']);
      }else{
        this.loginFalhou = true;
      }
    });
  }
}
