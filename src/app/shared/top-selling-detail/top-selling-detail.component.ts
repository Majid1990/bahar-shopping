import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Product } from 'src/app/model/product.model';
import { ITopSellingItem } from '../top-seller/model/top-seller.model';
import { TopSellerService } from '../top-seller/service/top-seller.service';

@Component({
  selector: 'app-top-selling-detail',
  templateUrl: './top-selling-detail.component.html',
  styleUrls: ['./top-selling-detail.component.scss'],
})
export class TopSellingDetailComponent implements OnInit {
  itemData: ITopSellingItem[] = [];
  productDetail: Product = { id: 0 };
  id: number = 0;
  constructor(
    private topSellerService: TopSellerService,
    private basketService: BasketService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.id = +params['id'];
    });

    this.topSellerService.getProductDetail(this.id).subscribe((x) => {
      this.productDetail = x;
    });
  }
  addToOrder(data: any) {
    this.basketService.addOrders(data);
  }
  backToTopSelling(data: any) {
    this.router.navigate;
  }
}
