import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from 'src/app/authentication/service/sign-up.service';
import { ClientProfileChangingNotificationComponent } from '../client-profile-changing-notification/client-profile-changing-notification.component';

export interface ClientInfo {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  phoneNumber: string;
  workAddress: string;
}
@Component({
  selector: 'app-client-profile-dialog',
  templateUrl: './client-profile-dialog.component.html',
  styleUrls: ['./client-profile-dialog.component.scss'],
})
export class ClientProfileDialogComponent {
  clientId = '-NNwAeEGoMGb5w3XRaok';
  durationInSeconds = 2;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: ClientInfo,
    private signupService: SignUpService,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveClientInfo(clientId?: any, value?: any) {
    this.signupService.editClientInfo(clientId, value).subscribe();
    this.openSnackBar();
  }
  private openSnackBar() {
    this._snackBar.openFromComponent(
      ClientProfileChangingNotificationComponent,
      {
        duration: this.durationInSeconds * 1000,
        panelClass: ['blue-snackbar'],
      }
    );
  }
}
