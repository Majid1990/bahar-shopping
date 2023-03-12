import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Order } from 'src/app/model/product.model';
import { OrderCancelNotificationComponent } from '../order-cancel-notification/order-cancel-notification.component';

@Component({
  selector: 'app-orders-payment',
  templateUrl: './orders-payment.component.html',
  styleUrls: ['./orders-payment.component.scss'],
})
export class OrdersPaymentComponent implements OnInit {
  orderedItems: Order[] = [];
  durationInSeconds = 2;
  totallPayment: number = 0;
  product: number = 0;
  price: number = 0;
  quantity: number = 0;
  itemWithQuantities: number = 0;
  discount: number = 0;
  tax: number = 0;
  PostagePacking: number = 10;

  constructor(
    public basketService: BasketService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<any>
  ) {}

  ngOnInit(): void {
    this.basketService.orderedItems$.subscribe((orders) => {
      this.orderedItems = orders;
    });

    this.claculateTotalPayment();
  }

  cancelItem(id: number) {
    this.basketService.removeOrder(id);
    this.openSnackBarCancelOrder();

    this.claculateTotalPayment();
  }

  addItemQuantity(productId: number) {
    const ordered = this.orderedItems.find(
      (orderItem) => orderItem.product.id === productId
    );
    if (ordered) {
      ordered.quantity++;
    }

    this.claculateTotalPayment();
  }

  private claculateTotalPayment() {
    this.totallPayment = 0;
    this.orderedItems.forEach((order) => {
      this.totallPayment += order.quantity * +order.product.price;
      this.discount = this.totallPayment / 10;
      this.totallPayment -= this.discount;
      this.tax = (this.totallPayment * 5) / 100;
      this.totallPayment += this.tax;
      this.totallPayment -= this.PostagePacking;
    });
  }

  removeItemQuantity(productId: number) {
    const order = this.orderedItems.find(
      (order) => order.product.id == productId
    );

    if (order) {
      if (order.quantity > 1) {
        order.quantity--;
      } else {
        this.cancelItem(order.product.id);
      }
    }

    this.claculateTotalPayment();
  }
  private openSnackBarCancelOrder() {
    this._snackBar.openFromComponent(OrderCancelNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['warning'],
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
