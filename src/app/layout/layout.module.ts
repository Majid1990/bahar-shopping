import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SearchComponent } from './components/search/search.component';
import { BasketComponent } from './components/basket/basket.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HeaderMenuComponent,
    HeaderMenuComponent,
    SearchComponent,
    BasketComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
