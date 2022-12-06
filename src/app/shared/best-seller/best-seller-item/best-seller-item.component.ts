import { AnimationBuilder } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { BestSeller } from 'src/app/shared/model/best-seller.model';

@Component({
  selector: 'app-best-seller-item',
  templateUrl: './best-seller-item.component.html',
  styleUrls: ['./best-seller-item.component.scss']
})
export class BestSellerItemComponent implements OnInit {

  @Input() bestSellers?: BestSeller[];

  constructor(private basketService: BasketService, private builder: AnimationBuilder) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  addToOrder(eve: any) {
    this.basketService.addOrders(eve)
  }

}
