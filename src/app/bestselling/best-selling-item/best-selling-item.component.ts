import { Component, Input, OnInit } from '@angular/core';
import { BestSeller } from '../model/best-seller.model';

@Component({
  selector: 'app-best-selling-item',
  templateUrl: './best-selling-item.component.html',
  styleUrls: ['./best-selling-item.component.scss']
})
export class BestSellingItemComponent implements OnInit {

  @Input() bestSellers?: BestSeller[];

  constructor() { }
  ngOnInit(): void {
  }

}
