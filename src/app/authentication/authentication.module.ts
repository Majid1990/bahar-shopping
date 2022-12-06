import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
