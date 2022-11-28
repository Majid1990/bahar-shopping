import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-orderedlist',
  templateUrl: './orderedlist.component.html',
  styleUrls: ['./orderedlist.component.scss']
})
export class OrderedlistComponent implements OnInit {

  orderedItems: any[] = []
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
