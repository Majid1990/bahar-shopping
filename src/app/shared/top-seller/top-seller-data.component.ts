import { Component, OnInit } from '@angular/core';
import { ITopSelling } from './model/top-seller.model';
import { TopSellerService } from './service/top-seller.service';

@Component({
  selector: 'app-top-seller-data',
  templateUrl: './top-seller-data.component.html',
  styleUrls: ['./top-seller-data.component.scss']
})
export class TopSellerDataComponent implements OnInit {


  bestSellingProducts: ITopSelling[] = [];


  constructor(private topSellingService: TopSellerService) { }

  ngOnInit(): void {

    this.topSellingService.getTopSellingItems().subscribe(data => {
      this.bestSellingProducts = data;
    })
  }

}
