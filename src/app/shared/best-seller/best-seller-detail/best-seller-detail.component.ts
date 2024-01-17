import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { Order, Product } from 'src/app/model/product.model';
import { OrderConfirmNotificationComponent } from 'src/app/orders/order-confirm-notification/order-confirm-notification.component';
import { BestSellerService } from '../../service/best-seller.service';

@Component({
  selector: 'app-best-seller-detail',
  templateUrl: './best-seller-detail.component.html',
  styleUrls: ['./best-seller-detail.component.scss'],
})
export class BestSellerDetailComponent implements OnInit {
  itemInfo: any;
  id: any;
  durationInSeconds = 2;
  imageHover: boolean = false;
  imageHovered: boolean = true;
  constructor(
    private basketService: BasketService,
    private bestSellerService: BestSellerService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    debugger;
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.id = +params['id'];
    });

    this.bestSellerService
      .getBestSellingParcelDetail(this.id)
      .subscribe((x) => {
        if (this.id === x?.id) {
          this.itemInfo = x;
        }
      });
    this.bestSellerService.getBestSellingDetail(this.id).subscribe((x) => {
      if (this.id === x?.id) {
        this.itemInfo = x;
      }
    });
    this.bestSellerService.BestSellerClothesDetail(this.id).subscribe((x) => {
      if (this.id === x?.id) {
        this.itemInfo = x;
      }
    });
  }
  addToOrder(itemInfo: Product) {
    this.basketService.addOrders(itemInfo);
    this.openSnackBar();
  }
  cancelItem(id: number) {
    this.basketService.removeOrder(id);
  }
  back() {
    this.router.navigate;
  }
  private openSnackBar() {
    this._snackBar.openFromComponent(OrderConfirmNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['blue-snackbar'],
    });
  }
}
