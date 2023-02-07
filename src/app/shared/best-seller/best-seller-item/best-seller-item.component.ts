import { Component, Input } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { BestSeller } from 'src/app/shared/model/best-seller.model';
import { BestSellerService } from '../../service/best-seller.service';

@Component({
  selector: 'app-best-seller-item',
  templateUrl: './best-seller-item.component.html',
  styleUrls: ['./best-seller-item.component.scss'],
})
export class BestSellerItemComponent {
  @Input() bestSellers?: BestSeller[];

  constructor(
    private basketService: BasketService,
    private bestSellerService: BestSellerService
  ) {}

  addToOrder(eve: any) {
    this.basketService.addOrders(eve);
  }
  showInDetail(eve: any) {
    this.bestSellerService.getBestSellingDetail(eve);
  }
}
