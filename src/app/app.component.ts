import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasketService } from './layout/components/basket/service/basket.service';
import { ITopSellingItem } from './home/components/top-selling/model/top-selling.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'bahar-shopping';
  // purchased?: ITopSellingItem[] = []
  // builder: any;
  // constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    //  this.purchased = this.basketService.orderedItems;
  }



}
