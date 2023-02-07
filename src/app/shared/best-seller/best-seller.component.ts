import { Component, OnInit } from '@angular/core';
import { BestSeller } from '../model/best-seller.model';
import { BestSellerService } from '../service/best-seller.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  bestSellers?: BestSeller[];

  constructor(private bestSellerService: BestSellerService) {}

  ngOnInit(): void {
    this.bestSellerService.getBestSellingData().subscribe((data) => {
      this.bestSellers = data;
    });
  }
}
