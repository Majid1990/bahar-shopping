import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay } from 'rxjs';
import { SignUpService } from '../../service/sign-up.service';
import { NewSignupNotificationComponent } from './new-signup-notification/new-signup-notification.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  myForm?: FormGroup;
  durationInSeconds = 2;

  constructor(
    private signUpService: SignUpService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.myForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  onSubmit(form?: FormGroup) {
    this.myForm?.get('firstName')?.value;
    this.myForm?.get('lastName')?.value;
    this.myForm?.get('email')?.value;
    this.myForm?.get('password')?.value;
    this.signUpService.postNewSignUp(form?.value);
    this.myForm?.reset();
    this.openSnackBarCancelOrder();
    delay(2000);
  }
  private openSnackBarCancelOrder() {
    this._snackBar.openFromComponent(NewSignupNotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
