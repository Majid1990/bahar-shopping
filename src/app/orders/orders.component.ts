import { Component, OnInit } from '@angular/core';
import { BasketService } from '../layout/components/basket/service/basket.service';
import { Order } from '../model/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderedItems: Order[] = [];
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.orderedItems$.subscribe((orders) => {
      this.orderedItems = orders;
    });
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id);
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
}
