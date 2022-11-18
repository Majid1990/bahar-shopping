import { Component, Input, OnInit } from '@angular/core';
import { ITopSelling, ITopSellingItem } from '../model/top-selling.model';
@Component({
  selector: 'app-top-selling-item',
  templateUrl: './top-selling-item.component.html',
  styleUrls: ['./top-selling-item.component.scss']
})
export class TopSellingItemComponent implements OnInit {

  @Input() bestSellingProducts?: ITopSelling;
  filteredBestSellingProducts?: ITopSellingItem[] = []
  constructor() { }

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
}
