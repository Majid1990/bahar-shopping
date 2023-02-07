import { Component, HostListener, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  productsVisibility: boolean = false;
  menuTrigger: any;
  @HostListener('majid') nyName: any = {};

  showProducts() {
    this.productsVisibility = true;
  }
  hideProducts() {
    this.productsVisibility = false;
  }
  getRidOfPproducts() {
    this.hideProducts();
  }
  someMethod() {
    this.trigger?.closeMenu();
  }

  shangeTabbar(eve: any) {}
}
