import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Order } from 'src/app/model/product.model';
import { BestSellerService } from '../../service/best-seller.service';

@Component({
  selector: 'app-best-seller-detail',
  templateUrl: './best-seller-detail.component.html',
  styleUrls: ['./best-seller-detail.component.scss'],
})
export class BestSellerDetailComponent implements OnInit {
  detailInfo: any;
  orderedItems: Order[] = [];
  constructor(
    private basketService: BasketService,
    private bestSellerService: BestSellerService
  ) {}

  ngOnInit(): void {
    this.basketService.orderedItems$.subscribe((orders) => {
      this.orderedItems = orders;
    });

    this.detailInfo = this.bestSellerService.detail;
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id);
  }
}
