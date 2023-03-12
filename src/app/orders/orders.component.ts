import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasketService } from '../layout/components/basket/service/basket.service';
import { Order } from '../model/product.model';
import { OrderCancelNotificationComponent } from './order-cancel-notification/order-cancel-notification.component';
import { OrdersPaymentComponent } from './orders-payment/orders-payment.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderedItems: Order[] = [];
  durationInSeconds = 2;
  constructor(
    private basketService: BasketService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.basketService.orderedItems$.subscribe((orders) => {
      this.orderedItems = orders;
    });
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id);
    this.openSnackBarCancelOrder();
  }

  addItemQuantity(productId: number) {
    const ordered = this.orderedItems.find(
      (orderItem) => orderItem.product.id === productId
    );
    if (ordered) {
      ordered.quantity++;
    }
  }
  removeItemQuantity(item: number) {
    const ordered = this.orderedItems.find((productId) => {
      if (productId.product.id === item) {
        productId.quantity--;
      }
      if (productId.product.id === item && productId.quantity < 1) {
        this.cancelItem(productId.product.id);
      }
    });
  }
  private openSnackBarCancelOrder() {
    this._snackBar.openFromComponent(OrderCancelNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['warning'],
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(OrdersPaymentComponent, {
      height: '80%',
      width: '70%',
      data: {
        orderedItems: this.orderedItems,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
