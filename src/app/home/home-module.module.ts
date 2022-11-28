import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { BestSellingItemComponent } from './components/best-selling-list/best-selling-item/best-selling-item.component';
import { BestsellingComponent } from './components/best-selling-list/bestselling.component';
import { TopsellingComponent } from './components/top-selling/top-selling-list.component';
import { TopSellingItemComponent } from './components/top-selling-item/top-selling-item.component';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { GalleryComponent } from '../layout/components/gallery/gallery.component';
import { DetailComponent } from './components/top-selling-item/detail/detail.component';

@NgModule({
  declarations: [
    BestSellingItemComponent,
    BestsellingComponent,
    TopsellingComponent,
    TopSellingItemComponent,
    HomeComponent,
    GalleryComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MatIconModule
  ]
})
export class HomeModuleModule { }
