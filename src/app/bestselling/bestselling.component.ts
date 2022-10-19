import { Component, OnInit } from '@angular/core';
import { BestSeller, DigiJet } from './model/best-seller.model';
import { BEST_SELLING_DATA } from './model/best-selling.data';
import { JET_OPTIONS } from './model/best-selling.data';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.scss']
})
export class BestsellingComponent implements OnInit {
  bestSellers: BestSeller[] = BEST_SELLING_DATA;
  jetMarketOptions: DigiJet[] = JET_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
