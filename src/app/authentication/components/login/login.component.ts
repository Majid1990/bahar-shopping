import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { SignUpService } from '../../service/sign-up.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginNotificationComponent } from '../login-notification/login-notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginSuccess: boolean = false;
  showFailed: boolean = false;
  myForm?: FormGroup;
  users: any[] = [];
  durationInSeconds = 2;
  hidePassword: string = 'password';
  show: boolean = false;
  constructor(
    private signUpService: SignUpService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.signUpService.findCustomer().subscribe((obj) => {
      let property: keyof typeof obj;
      for (property in obj) {
        const v = obj[property];
        this.users.push(v);
      }
    });
  }
  input(eve?: any, eve2?: any) {
    this.signUpService.profile(eve, eve2);
  }
  showPassword() {
    if (this.hidePassword === '') {
      this.hidePassword = 'password';
    } else if ((this.hidePassword = 'password')) {
      this.hidePassword = '';
    }
  }

  onSubmit(form?: FormGroup) {
    const user = this.users.find(
      (x) =>
        x.email === this?.myForm?.get('userName')?.value &&
        x.password === this.myForm?.get('password')?.value
    );

    if (user && this.myForm?.valid) {
      this.loginSucces();
    } else {
      this.loginFailed();
    }
  }
  forgetpassword() {
    this.loginSuccess = false;
    this.showFailed = false;
  }

  loginSucces() {
    this.loginSuccess = true;
    this.showFailed = false;
    this.signUpService.profile(
      this.myForm?.get('userName')?.value,
      this.myForm?.get('password')?.value
    );
    this.router.navigate(['../../../client-profile']);
    this.openSnackBarCancelOrder();
  }

  loginFailed() {
    this.showFailed = true;
    this.loginSuccess = false;
  }
  private openSnackBarCancelOrder() {
    this._snackBar.openFromComponent(LoginNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['warning'],
    });
  }
}
