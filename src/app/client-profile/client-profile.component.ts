import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUp } from '../authentication/model/sign-up.model';
import { SignUpService } from '../authentication/service/sign-up.service';
import { ClientProfileDialogComponent } from './client-profile-dialog/client-profile-dialog.component';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
})
export class ClientProfileComponent implements OnInit {
  users: any[] = [];
  user?: SignUp;

  constructor(private signUpService: SignUpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users = this.signUpService.users;
    this.user = this.users.find(
      (x) =>
        x.email == this.signUpService.user?.email &&
        x.password == this.signUpService.user?.password
    );
  }
  editClientInfo() {
    this.user;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClientProfileDialogComponent, {
      height: '650px',
      width: '900px',
      data: {
        firstName: this.user?.firstName,
        lastName: this.user?.lastName,
        email: this.user?.email,
        password: this.user?.password,
        address: this.user?.address,
        phoneNumber: this.user?.phoneNumber,
        workAddress: this.user?.workAddress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.user = result;
    });
  }
}
