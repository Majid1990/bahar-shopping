import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

  constructor() {}
  ngOnInit(): void {}

  someMethod() {
    this.trigger?.closeMenu();
  }
}
