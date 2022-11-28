import { Component, OnInit } from '@angular/core';
import { ITopSellingItem } from '../home/components/top-selling/model/top-selling.model';
import { BasketService } from './components/basket/service/basket.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'bahar-shopping';
  purchased?: ITopSellingItem[] = []
  builder: any;

  productsVisibility: boolean = false;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.purchased = this.basketService.orderedItems;
  }

  onScroll(eve: any) { }

}
