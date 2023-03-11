import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Product } from 'src/app/model/product.model';
import { OrderConfirmNotificationComponent } from 'src/app/orders/order-confirm-notification/order-confirm-notification.component';
import { ITopSellingItem } from '../top-seller/model/top-seller.model';
import { TopSellerService } from '../top-seller/service/top-seller.service';

@Component({
  selector: 'app-top-selling-detail',
  templateUrl: './top-selling-detail.component.html',
  styleUrls: ['./top-selling-detail.component.scss'],
})
export class TopSellingDetailComponent implements OnInit {
  itemData: ITopSellingItem[] = [];
  productDetail: Product = { id: 0, price: '' };
  id: number = 0;
  durationInSeconds = 2;
  constructor(
    private topSellerService: TopSellerService,
    private basketService: BasketService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
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
    this.openSnackBar();
  }
  back() {
    this.router.navigate;
  }
  private openSnackBar() {
    this._snackBar.openFromComponent(OrderConfirmNotificationComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
