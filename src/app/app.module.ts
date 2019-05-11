import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/view/home/home.component';
import { FormRequestApiComponent } from './components/shared/consulta-cep/consulta-cep.component';
import { appRouter } from './app.routing'
import { ConsultaCepService } from './services/consulta-cep/consulta-cep.service'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlertErrorComponent } from './components/shared/alert-error/alert-error.component';
import { HeaderComponent } from './components/home/header/header.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LogoComponent } from './components/home/logo/logo.component';
import { LoginComponent } from './components/view/login/login.component'
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from "@angular/common/http";
import { LoginGuard } from './Guards/login-guards';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormRequestApiComponent,
    AlertErrorComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    appRouter,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConsultaCepService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
