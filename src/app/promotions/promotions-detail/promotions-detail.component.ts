import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Product } from 'src/app/model/product.model';
import { OrderConfirmNotificationComponent } from 'src/app/orders/order-confirm-notification/order-confirm-notification.component';
import { BestSeller } from 'src/app/shared/model/best-seller.model';

@Component({
  selector: 'app-promotions-detail',
  templateUrl: './promotions-detail.component.html',
  styleUrls: ['./promotions-detail.component.scss'],
})
export class PromotionsDetailComponent implements OnInit {
  promotionsProducts: BestSeller[] = [];
  selectedItem?: BestSeller;
  productDetail: Product = { id: 0, price: '' };
  id?: number;
  durationInSeconds = 2;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private basketService: BasketService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = +params['id'];
    });
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
        this.selectedMethos();
      });
  }

  selectedMethos() {
    this.promotionsProducts.find((x) => {
      if (+x.id === this.id) {
        this.selectedItem = x;
      }
    });
  }
  backToTopSelling(eve: any) {}
  showInDetail() {}
  addToOrder(item: any) {
    this.basketService.addOrders(item);
    this.openSnackBar();
  }
  private openSnackBar() {
    debugger;
    this._snackBar.openFromComponent(OrderConfirmNotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  back() {
    this.router.navigate;
  }
}
