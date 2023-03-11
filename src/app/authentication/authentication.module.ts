import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginNotificationComponent } from './components/login-notification/login-notification.component';
import { NewSignupNotificationComponent } from './components/sign-up/new-signup-notification/new-signup-notification.component';
import { UsernameRecoveryComponent } from './components/username-recovery/username-recovery.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
    LoginNotificationComponent,
    NewSignupNotificationComponent,
    UsernameRecoveryComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class AuthenticationModule {}
