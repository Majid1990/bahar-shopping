import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestSeller } from '../model/best-seller.model';
import { BestSellerService } from '../service/best-seller.service';
import { Component } from '@angular/core';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  bestSellers?: BestSeller[];
  bestSellersParcel?: BestSeller[];
  bestSellerClothes?: BestSeller[];
  orders: any[] = [];

  constructor(
    private bestSellerService: BestSellerService,
    private router: Router,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.bestSellerService.getBestSellingData().subscribe((data) => {
      this.bestSellers = data;
    });
    this.bestSellerService.getBestSellingParcel().subscribe((data) => {
      this.bestSellersParcel = data;
    });
    this.bestSellerService.BestSellerClothes().subscribe((data) => {
      this.bestSellerClothes = data;
    });
  }
  showInDetail() {
    this.router.navigate;
  }
  addToOrder(item: BestSeller) {
    this.basketService.addOrders(item);
  }
}
