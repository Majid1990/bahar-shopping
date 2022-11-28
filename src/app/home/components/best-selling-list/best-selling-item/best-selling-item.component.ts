import { AnimationBuilder } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { BestSeller } from '../Model/best-seller.model';


@Component({
  selector: 'app-best-selling-item',
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.scss']
})
export class BestSellingItemComponent implements OnInit {

  @Input() bestSellers?: BestSeller[];

  constructor(private basketService: BasketService, private builder: AnimationBuilder) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addToOrder(eve: any) {
    this.basketService.addOrders(eve)
  }

}
