import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITopSelling } from './model/top-seller.model';
import { TopSellerService } from './service/top-seller.service';

@Component({
  selector: 'app-top-seller-data',
  templateUrl: './top-seller-data.component.html',
  styleUrls: ['./top-seller-data.component.scss'],
})
export class TopSellerDataComponent implements OnInit {
  TopSellingProducts: ITopSelling[] = [];
  TopSellingProductsInBook: ITopSelling[] = [];

  constructor(
    private topSellingService: TopSellerService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.getTopSellerInBook();
    this.topSellingService.getTopSellingItems().subscribe((data) => {
      this.TopSellingProducts = data;
    });
  }

  getTopSellerInBook() {
    this.http
      .get(
        'https://bahar-shopping-m-topseller-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .subscribe((obj) => {
        let property: keyof typeof obj;
        for (property in obj) {
          const user = obj[property];
          this.TopSellingProducts?.push(user as unknown as ITopSelling);
        }
      });
  }
}
