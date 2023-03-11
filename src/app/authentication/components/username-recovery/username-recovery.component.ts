import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-username-recovery',
  templateUrl: './username-recovery.component.html',
  styleUrls: ['./username-recovery.component.scss'],
})
export class UsernameRecoveryComponent implements OnInit {
  myForm?: FormGroup;
  hidePassword: string = 'password';
  constructor() {}
  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  onSubmit(form?: FormGroup) {}
  showPassword() {
    if (this.hidePassword === '') {
      this.hidePassword = 'password';
    } else if ((this.hidePassword = 'password')) {
      this.hidePassword = '';
    }
  }
}
