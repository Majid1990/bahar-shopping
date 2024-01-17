import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AllProductsComponent } from 'src/app/shared/all-products/all-products.component';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent {
  productsVisibility: boolean = false;
  menuTrigger: any;
  @HostListener('majid') nyName: any = {};

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    console.debug('Scroll Event', window.pageYOffset);
  }

  constructor(private router: Router, private matDialog: MatDialog) {}
  // showProducts() {
  //   this.router.navigate;
  // }
  // hideProducts() {
  //   this.productsVisibility = false;
  // }
  // getRidOfPproducts() {
  //   this.hideProducts();
  // }
  close() {
    let dialogRef = this.matDialog.open(AllProductsComponent);
    dialogRef.close();
  }

  changeTabbar(eve: any) {
    debugger;
    console.debug('Scroll Event', window.pageYOffset);
    console.log(eve);
  }
}
