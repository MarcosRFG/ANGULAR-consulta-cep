import { CanActivate }    from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  
	private estaLogado: boolean;	
	constructor(private loginService: LoginService, private router: Router){
	}

	canActivate() {
		this.loginService.retornaSeEstaLogado().subscribe(res => {
			this.estaLogado = res;
		});

		if (this.estaLogado) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
  	}
}