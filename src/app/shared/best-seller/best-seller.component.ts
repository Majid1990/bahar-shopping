import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestSeller } from '../model/best-seller.model';
import { BestSellerService } from '../service/best-seller.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  bestSellers?: BestSeller[];
  bestSellersParcel?: BestSeller[];

  constructor(
    private bestSellerService: BestSellerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bestSellerService.getBestSellingData().subscribe((data) => {
      this.bestSellers = data;
    });
    this.bestSellerService.getBestSellingParcel().subscribe((data) => {
      this.bestSellersParcel = data;
    });
  }
  showInDetail() {
    this.router.navigate;
  }
}
