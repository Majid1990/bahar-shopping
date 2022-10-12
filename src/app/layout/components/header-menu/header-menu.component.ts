import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;
  productsVisibility: boolean = false;
  menuTrigger: any;
  constructor() { }

  ngOnInit(): void {
  }
  showProducts() {
    this.productsVisibility = true;
  }
  hideProducts() {
    this.productsVisibility = false;
  }
  getRidOfPproducts() {
    this.hideProducts()
  }
  someMethod() {
    this.trigger?.closeMenu(); // <-- put this in your dialog open method
  }
}
