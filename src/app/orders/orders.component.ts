import { Component, OnInit } from '@angular/core';
import { BasketService } from '../layout/components/basket/service/basket.service';
import { Order } from '../model/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderedItems: Order[] = []
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.orderedItems$.subscribe((orders) => {
      this.orderedItems = orders
    });
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id)
  }

}
