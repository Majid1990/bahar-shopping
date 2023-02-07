import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, GalleryComponent],
  imports: [CommonModule, HomeModuleRoutingModule, MatIconModule, SharedModule],
})
export class HomeModuleModule {}
