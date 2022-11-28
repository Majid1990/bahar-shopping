import { Component, OnInit } from '@angular/core';
import { ITopSelling } from './model/top-selling.model';
import { TopSellingService } from './Services/top-selling.service';


@Component({
  selector: 'app-topselling',
  templateUrl: './top-selling-list.component.html',
  styleUrls: ['./top-selling-list.component.scss']
})
export class TopsellingComponent implements OnInit {

  bestSellingProducts: ITopSelling[] = [];


  constructor(private topSellingService: TopSellingService) { }

  ngOnInit(): void {

    this.topSellingService.getTopSellingItems().subscribe(data => {
      this.bestSellingProducts = data;
    })
  }


}
