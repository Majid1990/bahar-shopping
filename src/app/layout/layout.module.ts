import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SearchComponent } from './components/search/search.component';
import { BasketComponent } from './components/basket/basket.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HeaderMenuComponent,
    SearchComponent,
    BasketComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
