import { Component, OnInit } from '@angular/core';
import { BestSeller, DigiJet } from './model/best-seller.model';
//import { BEST_SELLING_DATA } from './model/best-selling.data';
import { JET_OPTIONS } from './model/best-selling.data';
import { BestsellingService } from './Services/bestselling.service';


@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.scss']
})
export class BestsellingComponent implements OnInit {
  bestSellers?: BestSeller[];
  jetMarketOptions: DigiJet[] = JET_OPTIONS;

  constructor(private bestSellingService: BestsellingService) { }

  ngOnInit(): void {
    this.bestSellingService.getBestSellingData().subscribe(data => {
      this.bestSellers = data
    })
  }

  getPromotions() {

  }

}
