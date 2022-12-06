import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { ITopSelling, ITopSellingItem } from '../top-seller/model/top-seller.model';

@Component({
  selector: 'app-top-seller-item',
  templateUrl: './top-seller-item.component.html',
  styleUrls: ['./top-seller-item.component.scss']
})
export class TopSellerItemComponent implements OnInit {

  @Input() bestSellingProducts?: ITopSelling;
  filteredBestSellingProducts?: ITopSellingItem[] = []
  quantityCounter: number = 0;

  @ViewChild('f') prop?: NgForm;
  constructor(private basketService: BasketService, public dialog: MatDialog,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.filteredBestSellingProducts = this.bestSellingProducts?.topSellingItems.slice(0, 9);

  }
  nextItems() {
    let firstProduct = this.bestSellingProducts?.topSellingItems.shift();
    this.bestSellingProducts?.topSellingItems.push(firstProduct!);
    this.filteredBestSellingProducts = this.bestSellingProducts?.topSellingItems.slice(0, 9);
  }
  previousItems() {
    // this.bestSellingProducts?.topSellingItems.push();
    let lastItem = this.bestSellingProducts?.topSellingItems.pop();
    if (this.bestSellingProducts) {
      this.bestSellingProducts.topSellingItems = [lastItem!, ...this.bestSellingProducts.topSellingItems]
    }
    this.filteredBestSellingProducts = this.bestSellingProducts?.topSellingItems.slice(0, 9);
  }
  onSubmit() {
    // console.log(form)
    // form: NgForm
  }

  addToOrder(data: ITopSellingItem) {
    // this.basketService.addBasketItemsCounter()
    this.basketService.addOrders(data)
  }
  // openDialog(id: number) {
  //   this.dialog.open(DetailComponent, {
  //     width: '550px',
  //     height: '550px',
  //     data: {
  //       id
  //     }
  //   });
  // }

  details() {
    //this.router.navigate()
  }
}
