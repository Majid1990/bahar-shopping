import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasketService } from 'src/app/layout/components/basket/service/basket.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITopSelling, ITopSellingItem } from '../top-selling/model/top-selling.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-selling-item',
  templateUrl: './top-selling-item.component.html',
  styleUrls: ['./top-selling-item.component.scss']
})
export class TopSellingItemComponent implements OnInit {

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
  openDialog(id: number) {
    this.dialog.open(DetailComponent, {
      width: '550px',
      height: '550px',
      data: {
        id
      }
    });
  }

  details() {
    //this.router.navigate()
  }

  // openSnackBar() {
  //   // this._snackBar.open();
  // }
}
