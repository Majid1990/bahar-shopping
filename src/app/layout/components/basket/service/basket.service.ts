import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Order, Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  orderedItems: Order[] = []
  orderedItems$ = new BehaviorSubject<any[]>([]);
  quantity: number = 0;
  constructor() { }

  addOrders(orderedProduct: Product) {
    // if (this.orderedItems.some((item) => item.product.id === orderedProduct.id)) {
    //   let existingOrder = this.orderedItems.find((order) => order.product.id === orderedProduct.id)
    //   if (existingOrder)
    //     existingOrder.quantity++
    // } else {
    //   this.orderedItems.push(orderedProduct)
    // }
    let existingOrder = this.orderedItems.find((order) => order.product.id === orderedProduct.id)
    if (existingOrder) {
      this.quantity = existingOrder.quantity++
    } else {
      const neworderedProduct: Order = { quantity: 1, product: orderedProduct }
      this.orderedItems.push(neworderedProduct)
    }

    this.orderedItems$.next(this.orderedItems)
  }
  removeOrder(id: number): void {
    this.orderedItems = this.orderedItems.filter(x => x.product.id !== id)
    this.orderedItems$.next(this.orderedItems)
  }

}