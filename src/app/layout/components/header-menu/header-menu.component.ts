import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

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
}
