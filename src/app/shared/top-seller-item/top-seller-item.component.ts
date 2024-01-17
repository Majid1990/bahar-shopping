import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { OrderConfirmNotificationComponent } from 'src/app/orders/order-confirm-notification/order-confirm-notification.component';
import {
  ITopSelling,
  ITopSellingItem,
} from '../top-seller/model/top-seller.model';

@Component({
  selector: 'app-top-seller-item',
  templateUrl: './top-seller-item.component.html',
  styleUrls: ['./top-seller-item.component.scss'],
})
export class TopSellerItemComponent implements OnInit {
  @Input() bestSellingProducts?: ITopSelling;
  filteredBestSellingProducts?: ITopSellingItem[] = [];
  quantityCounter: number = 0;
  durationInSeconds = 2;
  akbarData: any;

  @ViewChild('f') prop?: NgForm;
  constructor(
    private basketService: BasketService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredBestSellingProducts =
      this.bestSellingProducts?.topSellingItems.slice(0, 9);
  }
  nextItems() {
    let firstProduct = this.bestSellingProducts?.topSellingItems.shift();
    this.bestSellingProducts?.topSellingItems.push(firstProduct!);
    this.filteredBestSellingProducts =
      this.bestSellingProducts?.topSellingItems.slice(0, 9);
  }
  previousItems() {
    let lastItem = this.bestSellingProducts?.topSellingItems.pop();
    if (this.bestSellingProducts) {
      this.bestSellingProducts.topSellingItems = [
        lastItem!,
        ...this.bestSellingProducts.topSellingItems,
      ];
    }
    this.filteredBestSellingProducts =
      this.bestSellingProducts?.topSellingItems.slice(0, 9);
  }

  addToOrder(data: ITopSellingItem) {
    this.basketService.addOrders(data);
    this.openSnackBar();
  }
  details() {
    this.router.navigate;
  }
  private openSnackBar() {
    this._snackBar.openFromComponent(OrderConfirmNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['warning'],
    });
  }
}
