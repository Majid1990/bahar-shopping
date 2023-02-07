import { Component } from '@angular/core';
import { SignUp } from '../../model/sign-up.model';
import { SignUpService } from '../../service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  email: string = '';

  constructor(private signUpService: SignUpService) {}

  submit() {
    const akbar: SignUp = {
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      emailAddress: this.email,
    };
    this.signUpService.newSignUp(akbar);
    this.signUpService.postNewSignUp(akbar);
  }
}
