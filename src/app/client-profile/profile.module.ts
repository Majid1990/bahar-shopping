import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ClientProfileComponent } from './client-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { ClientProfileDialogComponent } from './client-profile-dialog/client-profile-dialog.component';
import { ClientProfileChangingNotificationComponent } from './client-profile-changing-notification/client-profile-changing-notification.component';

@NgModule({
  declarations: [ClientProfileComponent, ClientProfileDialogComponent, ClientProfileChangingNotificationComponent],
  imports: [CommonModule, ProfileRoutingModule, MatDialogModule, SharedModule],
})
export class ProfileModule {}
