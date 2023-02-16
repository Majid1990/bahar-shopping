import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Order, Product } from 'src/app/model/product.model';
import { BestSellerService } from '../../service/best-seller.service';

@Component({
  selector: 'app-best-seller-detail',
  templateUrl: './best-seller-detail.component.html',
  styleUrls: ['./best-seller-detail.component.scss'],
})
export class BestSellerDetailComponent implements OnInit {
  itemInfo: any;
  id: any;
  constructor(
    private basketService: BasketService,
    private bestSellerService: BestSellerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.id = +params['id'];
    });

    this.bestSellerService.getBestSellingDetail(this.id).subscribe((x) => {
      this.itemInfo = x;
    });
  }
  addToOrder(itemInfo: Product) {
    this.basketService.addOrders(itemInfo);
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id);
  }
}
