import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BestSeller } from '../shared/model/best-seller.model';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss'],
})
export class PromotionsComponent implements OnInit {
  promotionsProducts: BestSeller[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://best-seller-b46d8-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .subscribe((obj) => {
        let property: keyof typeof obj;
        for (property in obj) {
          const user = obj[property];
          this.promotionsProducts.push(user as unknown as BestSeller);
        }
      });
  }
}
