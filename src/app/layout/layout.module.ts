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
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NavbarScrollDirective } from './components/header-menu/navbar-scroll.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

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
    NavbarScrollDirective,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
