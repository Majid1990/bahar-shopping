import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ClientProfileComponent } from './client-profile.component';

@NgModule({
  declarations: [ClientProfileComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
