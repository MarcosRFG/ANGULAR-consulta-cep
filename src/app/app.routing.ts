import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/view/home/home.component';
import { LoginComponent } from './components/view/login/login.component';
import { LoginGuard } from './Guards/login-guards';

const routes : Routes = [
    {path: 'login', component: LoginComponent },
    {path: '', component: HomeComponent, canActivate: [ LoginGuard ]  }

]

export const appRouter = RouterModule.forRoot(routes) 