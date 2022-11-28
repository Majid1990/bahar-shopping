import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITopSellingItem } from 'src/app/home/components/top-selling/model/top-selling.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  orderedItems: any[] = []
  orderedItems$ = new BehaviorSubject<any[]>([]);

  constructor() { }

  addOrders(data: any) {
    debugger
    this.orderedItems.push(data)
    this.orderedItems$.next(this.orderedItems)
  }
  removeOrder(id: number): void {
    this.orderedItems = this.orderedItems.filter(x => x.id !== id)
    this.orderedItems$.next(this.orderedItems)
  }

}