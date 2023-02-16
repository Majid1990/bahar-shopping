import { Component, OnInit } from '@angular/core';
import { SignUp } from '../authentication/model/sign-up.model';
import { SignUpService } from '../authentication/service/sign-up.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
})
export class ClientProfileComponent implements OnInit {
  // picture: string = '';
  users: any[] = [];
  clienctInfo?: any;
  akbar?: SignUp;
  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {
    debugger;
    this.signUpService.findCustomer('x', 'y').subscribe((obj) => {
      debugger;
      let property: keyof typeof obj;
      for (property in obj) {
        const v = obj[property];
        this.users.push(v);
      }
    });
    debugger;
    this.clienctInfo = this.signUpService.user;
    this.akbar = this.users.find((x) => {
      debugger;
      x.email === this.clienctInfo?.email &&
        x.password == this.clienctInfo?.password;
    });
    // this.clientService.profile()?.email &&
    // this.clientService.profile()?.firstName &&
    // this.clientService.profile()?.lastName;
  }
}
